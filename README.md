# Andy Osindo Portfolio

A static portfolio with project filters, a CV download and a contact form.

## Develop

Use Node.js 22 or later and Python 3.11 or later.

```bash
npm ci
npm start
```

This builds the site and previews `dist/` at http://127.0.0.1:3000. Rebuild
and refresh after changing source files. `./start-server.sh` does the same.
The preview binds only to loopback, blocks directory listings and serves
built public files rather than the repository.

## Build and verify

```bash
npm run build
npm test
npm audit
```

The build copies both HTML pages, public assets and the pinned browser libraries
from `node_modules` into `dist/`. It excludes development tools, package files,
SCSS sources and source maps. The old Gulp/Parcel pipeline has been removed.
The theme's compiled CSS is preserved; to edit its SCSS sources, run `npm run sass`.
Bootstrap 5 JavaScript powers the interactive controls with `data-bs-*`
attributes; the existing Bootstrap 4 based theme supplies the visual styles.

The regression tests require a build and local socket access. They check script
and link safety, public asset references, security headers, traversal, symlink
escapes, hidden files and directory listing restrictions.

## Deploy to Netlify

Connect this repository to Netlify. `netlify.toml` configures:

- Build command: `npm run netlify-build`
- Publish directory: `dist`
- Node.js: 22
- Content Security Policy, HTTPS persistence, framing restrictions, MIME sniffing
  protection, referrer policy and disabled camera/microphone/geolocation access.

Deploy through the repository integration so Netlify applies `netlify.toml`.
Deploy the generated `dist/` directory only. For other hosting providers, configure
the same response headers from `netlify.toml` and HTTPS on that host.

## Contact form

The form submits directly to FormSubmit over HTTPS, with its default CAPTCHA and
a honeypot field. FormSubmit handles submission confirmation. Its email recipient
must be activated with the service before messages can be delivered. Client-side
validation is only a usability aid; spam control and validation at the receiving
service remain necessary. Automated tests do not send messages.

## Files

- `index.html`, `components.html`: pages
- `assets/`: theme CSS, JavaScript, images, icons and CV
- `scripts/build.mjs`: static build
- `serve.py`: restricted local preview
- `tests/test_security.py`: security regression tests
- `netlify.toml`: hosting and security configuration

Changes here take effect on the public website after deployment. This repository
does not identify a live site URL, so production responses must be checked after
deploying.
