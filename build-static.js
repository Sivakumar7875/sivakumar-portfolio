import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Build the static site
await build({
  root: __dirname,
  build: {
    outDir: 'dist/public',
    emptyOutDir: true,
  },
});

console.log('Static build completed successfully!');