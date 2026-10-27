#!/usr/bin/env python3
"""Loopback-only preview of the public build; never serve the repository."""
import http.server
from pathlib import Path
import socketserver
import tomllib
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / 'dist'
HOST = '127.0.0.1'
PORT = 3000


class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PUBLIC), **kwargs)

    def send_head(self):
        path = unquote(urlsplit(self.path).path)
        parts = Path(path).parts
        target = (PUBLIC / path.lstrip('/')).resolve()
        if (any(part.startswith('.') or part == '..' for part in parts)
                or not target.is_relative_to(PUBLIC.resolve())):
            self.send_error(404)
            return None
        return super().send_head()

    def list_directory(self, path):
        self.send_error(404)
        return None

    def end_headers(self):
        config = tomllib.loads((ROOT / 'netlify.toml').read_text())
        for rule in config.get('headers', []):
            if rule['for'] == '/*':
                for name, value in rule['values'].items():
                    # HSTS belongs on the production HTTPS origin.
                    if name != 'Strict-Transport-Security':
                        self.send_header(name, value)
        super().end_headers()


class PreviewServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def main():
    if not (PUBLIC / 'index.html').is_file():
        raise SystemExit('Build the site first with: npm run build')
    with PreviewServer((HOST, PORT), CustomHTTPRequestHandler) as server:
        print(f'Portfolio preview: http://{HOST}:{PORT}', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
