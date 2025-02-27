import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import browserslistToEsbuild from 'browserslist-to-esbuild';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // Allows importing SVGs as React components
  ],
  build: {
    outDir: 'build', // Match CRA's build directory
    target: browserslistToEsbuild(), // Use browserslist config for compatibility
  },
  server: {
    port: 3000, // Match CRA's default port
    open: true,
  },
  resolve: {
    alias: {
      // Add any aliases you might have in jsconfig/tsconfig
      // '@': '/src',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // Add this line to prioritize extensions
  },
  // Add the following configuration to handle .js files as JSX
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});