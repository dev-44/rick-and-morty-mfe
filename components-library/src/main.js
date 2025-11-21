import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/config.ts";
import App from "./App";
import { ThemeProvider } from "@shared/theme/ThemeProvider";
import "@shared/theme/fonts.ts";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }));
