"""Regression checks for the public build and preview boundary."""
from html.parser import HTMLParser
import http.client
from pathlib import Path
import shutil
import subprocess
import tempfile
import threading
import unittest
import serve


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


class PublicBuildTests(unittest.TestCase):
    def test_build_under_hidden_parent_keeps_assets_and_excludes_private_files(self):
        with tempfile.TemporaryDirectory() as temporary:
            checkout = Path(temporary) / '.projects' / 'portfolio'
            checkout.mkdir(parents=True)
            for directory in ['scripts', 'assets']:
                shutil.copytree(serve.ROOT / directory, checkout / directory)
            for name in ['index.html', 'components.html', '_redirects']:
                shutil.copy2(serve.ROOT / name, checkout / name)
            (checkout / 'node_modules').symlink_to(serve.ROOT / 'node_modules', target_is_directory=True)
            css = checkout / 'assets' / 'css'
            (css / '.private').mkdir()
            (css / '.private' / 'secret.css').write_text('private')
            (css / '.env').write_text('private')
            (css / 'theme.css.map').write_text('private')
            (css / 'linked.css').symlink_to(checkout / 'index.html')
            subprocess.run(['node', 'scripts/build.mjs'], cwd=checkout, check=True, capture_output=True)
            public = checkout / 'dist'
            for name in ['assets/css/johndoe.css', 'assets/js/portfolio.js',
                         'assets/imgs/favicon.svg', 'assets/files/andrew-osindo-cv.pdf',
                         'assets/vendors/themify-icons/css/themify-icons.css']:
                with self.subTest(asset=name):
                    self.assertEqual((public / name).read_bytes(), (checkout / name).read_bytes())
            for name in ['.private', '.env', 'theme.css.map', 'linked.css']:
                self.assertFalse((public / 'assets' / 'css' / name).exists())

    def test_no_private_or_build_files_are_published(self):
        allowed = {'index.html', 'components.html', '_redirects', 'assets'}
        self.assertEqual({p.name for p in serve.PUBLIC.iterdir()}, allowed)
        for path in serve.PUBLIC.rglob('*'):
            self.assertFalse(any(part.startswith('.') for part in path.relative_to(serve.PUBLIC).parts))
            self.assertNotIn(path.suffix, {'.map', '.scss', '.py'})

    def test_pages_use_local_scripts_without_inline_handlers(self):
        for page in ['index.html', 'components.html']:
            parser = PageParser()
            parser.feed((serve.PUBLIC / page).read_text())
            for tag, attrs in parser.tags:
                self.assertFalse(any(key.startswith('on') for key in attrs))
                if tag == 'script':
                    self.assertTrue(attrs.get('src', '').startswith('assets/'))
                for key in ['src', 'href']:
                    value = attrs.get(key, '')
                    if value.startswith('assets/'):
                        self.assertTrue((serve.PUBLIC / value).is_file(), value)
                if tag == 'a' and attrs.get('target') == '_blank':
                    self.assertIn('noopener', attrs.get('rel', '').split())
            self.assertNotIn('name="_captcha" value="false"', (serve.PUBLIC / page).read_text())


class PreviewTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = serve.PreviewServer((serve.HOST, 0), serve.CustomHTTPRequestHandler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()

    def request(self, path, method='GET'):
        client = http.client.HTTPConnection(serve.HOST, self.server.server_address[1])
        client.request(method, path)
        response = client.getresponse()
        result = response.status, dict(response.getheaders()), response.read()
        client.close()
        return result

    def test_page_and_security_headers(self):
        status, headers, body = self.request('/')
        self.assertEqual(status, 200)
        self.assertIn(b'Andy Osindo', body)
        policy = headers['Content-Security-Policy']
        self.assertIn("script-src 'self'", policy)
        self.assertIn("frame-ancestors 'none'", policy)
        self.assertIn('form-action https://formsubmit.co', policy)
        self.assertEqual(headers['X-Content-Type-Options'], 'nosniff')
        self.assertNotIn('Access-Control-Allow-Origin', headers)

    def test_private_files_and_traversal_are_blocked(self):
        paths = ['/.git/config', '/.env', '/package.json', '/serve.py',
                 '/%2e%2e/index.html', '/assets/%2e%2e/%2e%2e/package.json',
                 '/assets/', '/assets/vendors/', '/assets/%2egit/config']
        for path in paths:
            for method in ['GET', 'HEAD']:
                with self.subTest(path=path, method=method):
                    self.assertEqual(self.request(path, method)[0], 404)

    def test_symlinks_cannot_escape_public_directory(self):
        link = serve.PUBLIC / 'private-link'
        link.symlink_to(serve.ROOT / 'package.json')
        try:
            self.assertEqual(self.request('/private-link')[0], 404)
        finally:
            link.unlink()


if __name__ == '__main__':
    unittest.main()
