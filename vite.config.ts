import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy : {
    '/api' : 'https://nrp-backend.onrender.com',
    }
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: [
        '@rollup/rollup-linux-x64-gnu',
        '@esbuild/linux-x64'
      ]
    }
  }
});
