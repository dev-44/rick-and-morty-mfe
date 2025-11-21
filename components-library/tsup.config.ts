import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/shared/theme/ThemeProvider.tsx",
    "src/shared/theme/theme.ts",
    "src/i18n/config.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: false,
  external: ["react", "react-dom"],
  tsconfig: "tsconfig.build.json",
});
