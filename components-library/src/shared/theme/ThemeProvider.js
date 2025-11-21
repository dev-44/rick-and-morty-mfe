import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
export function ThemeProvider({ children }) {
    return (_jsxs(MuiThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), children] }));
}
