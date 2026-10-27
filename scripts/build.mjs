import { cp, lstat, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { relative, sep } from 'node:path';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const assets = fileURLToPath(new URL('assets/', root));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'components.html', '_redirects']) {
  await cp(new URL(file, root), new URL(file, output));
}
for (const directory of ['css', 'js', 'imgs', 'files', 'vendors/themify-icons']) {
  await cp(new URL(`assets/${directory}`, root), new URL(`assets/${directory}`, output), {
    recursive: true,
    filter: async source => !source.endsWith('.map')
      && !relative(assets, source).split(sep).some(part => part.startsWith('.'))
      && !(await lstat(source)).isSymbolicLink(),
  });
}
const libraries = {
  'jquery/dist/jquery.min.js': 'jquery/jquery.min.js',
  'bootstrap/dist/js/bootstrap.bundle.min.js': 'bootstrap/bootstrap.bundle.min.js',
  'isotope-layout/dist/isotope.pkgd.min.js': 'isotope/isotope.pkgd.min.js',
};
for (const [source, destination] of Object.entries(libraries)) {
  const target = new URL(`assets/vendors/${destination}`, output);
  await mkdir(new URL('./', target), { recursive: true });
  await cp(new URL(`node_modules/${source}`, root), target);
}
console.log(`Built public files in ${fileURLToPath(output)}`);
