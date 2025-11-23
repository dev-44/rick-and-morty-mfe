import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  bundle: true,
  sourcemap: false,
  clean: true,
  splitting: false,
  outDir: "dist",
  tsconfig: "tsconfig.json",
  external: [
    "react",
    "react-dom",
    "@mui/material",
    "@emotion/react",
    "@emotion/styled",
    "i18next",
    "react-i18next",
  ],
});
