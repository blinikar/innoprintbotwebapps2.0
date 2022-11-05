import { defineConfig } from 'vitest/config';
import path from 'path';
import process from 'process';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths({
      root: '..'
    }),
    react()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  css: {
    devSourcemap: true,
  },
  root: path.resolve(process.cwd(), 'src')
});
