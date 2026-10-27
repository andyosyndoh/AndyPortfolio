# Development setup

See [README.md](README.md) for the current development and deployment instructions.

Requirements: Node.js 22 or later, npm, and Python 3.11 or later.

```bash
npm ci
npm start
```

The preview serves `dist/` on loopback. Rebuild after source changes with
`npm run build`. Run `npm test` after building to verify the public output
and preview security restrictions. Run `npm audit` to check dependency advisories.

The old Parcel and Gulp setup has been replaced by `scripts/build.mjs`.
Use `npm run sass` when changing theme SCSS. Browser libraries are pinned in
`package.json` and copied from `node_modules` during the build.

Netlify uses `netlify.toml` and publishes only `dist/`. The production deployment
must apply the configured security headers; verify them on the live URL after
deploying. The local preview applies those headers except HTTPS persistence.
