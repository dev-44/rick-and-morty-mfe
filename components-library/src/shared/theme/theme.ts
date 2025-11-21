import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import { fontFamilies, fontWeights } from "./fonts";

/**
 * Tema personalizado de Material UI
 * Configuración de colores, tipografía y espaciado
 */
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      "Monserrat",
    ].join(","),
    h3: {
      fontFamily: fontFamilies.primary,
      fontWeight: fontWeights.semibold,
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "0",
      color: colors.neutrals.neutral800,
    },
    h5: {
      fontFamily: fontFamilies.primary,
      fontWeight: fontWeights.bold,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "2%",
    },
    bodySmall: {
      fontFamily: fontFamilies.primary,
      fontWeight: fontWeights.medium,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: 0,
      color: colors.neutrals.neutral600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});
