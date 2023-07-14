import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port:
      process.env.PORT && Number.isNaN(process.env.PORT) == false
        ? parseInt(process.env.PORT)
        : 8000,
  },
});
