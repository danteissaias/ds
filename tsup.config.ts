import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  clean: true,
  sourcemap: false,
  minify: true,
  format: ['esm', 'cjs'],
});
