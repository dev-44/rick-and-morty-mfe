import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        characters: {
          type: "module",
          name: "characters",
          entry: "http://localhost:5001/remoteEntry.js",
        },
      },
      shared: {
        react: { singleton: true },
        zustand: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
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
    port: 3000,
    strictPort: true,
    cors: true,
    fs: { strict: false },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    preserveSymlinks: true,
  },
});
