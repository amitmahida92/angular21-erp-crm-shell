import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const app = 'shell-app';
const source = join('dist', app, 'browser');
const outDir = join('dist', 'github-pages');

if (!existsSync(source)) {
  throw new Error(`Missing build output: ${source}`);
}

rmSync(outDir, { force: true, recursive: true });
mkdirSync(outDir, { recursive: true });
cpSync(source, outDir, { recursive: true });
cpSync(join(outDir, 'index.html'), join(outDir, '404.html'));
