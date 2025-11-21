/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * Configuración de Vite
 * Incluye configuración para testing con Vitest
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@components": path.resolve(__dirname, "src/shared"),
    },
  },
  // Optimizaciones de build
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "mui-vendor": ["@mui/material", "@emotion/react", "@emotion/styled"],
          "i18n-vendor": ["i18next", "react-i18next"],
        },
      },
    },
  },
});
