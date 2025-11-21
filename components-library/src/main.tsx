import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/config.ts";
import App from "./App";
import { ThemeProvider } from "@shared/theme/ThemeProvider";
import "@shared/theme/fonts.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
