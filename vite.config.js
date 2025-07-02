

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/e-commerce-last/", // Must match your repo name exactly
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          // If you're using these libraries, uncomment:
          // 'ui-vendor': ['@mui/material', 'antd'], // UI libraries
          // 'utils-vendor': ['lodash', 'axios', 'moment'], // Utility libraries
        }
      }
    },
    // Optional: Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  }
})
