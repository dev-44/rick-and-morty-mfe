import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  minify: false,
  outDir: "dist",
  bundle: true,
  external: ["react", "react-dom", "@mui/material", "@emotion/react", "@emotion/styled"],
});
