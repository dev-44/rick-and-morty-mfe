/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import libCss from "vite-plugin-libcss";

export default defineConfig({
  plugins: [
    react(),
    libCss(),
    federation({
      name: "characters",
      filename: "remoteEntry.js",
      exposes: {
        "./CharactersApp": "./src/presentation/remote/CharactersApp.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
        zustand: { singleton: true },
        "@tanstack/react-query": { singleton: true },
        "@mui/material": { singleton: true },
        "@mui/system": { singleton: true },
        "@emotion/react": { singleton: true },
        "@emotion/styled": { singleton: true },
        i18next: { singleton: true },
        "react-i18next": { singleton: true },
      },
      manifest: true,
    }),
  ],
  server: {
    port: 5001,
    strictPort: true,
    cors: {
      origin: "*",
      methods: ["GET", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    },
    fs: {
      strict: false,
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    assetsDir: "assets",
  },
  resolve: {
    preserveSymlinks: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: {
      origin: "*",
      methods: ["GET"],
      allowedHeaders: ["*"],
    },
  },
});
