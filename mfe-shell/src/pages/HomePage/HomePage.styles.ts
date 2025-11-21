import type { SxProps, Theme } from "@mui/material";

export const homeContainerSx: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
};

export const backgroundImageSx: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  filter: "brightness(0.45)", // oscurece la imagen
};

export const logoSx: SxProps<Theme> = {
  width: "340px",
  maxWidth: "80%",
  zIndex: 2,
  mb: 2,
};

export const contentWrapperSx: SxProps<Theme> = {
  position: "relative",
  zIndex: 2,
  maxWidth: "700px",
  px: 3,
};

export const titleSx: SxProps<Theme> = {
  fontWeight: 600,
  mb: 2,
  fontSize: {
    xs: "1.8rem",
    md: "2.4rem",
  },
  color: "#ffffff",
};

export const subtitleSx: SxProps<Theme> = {
  opacity: 0.9,
  mb: 4,
  fontSize: {
    xs: "1rem",
    md: "1.2rem",
  },
};

export const buttonSx: SxProps<Theme> = {
  px: 4,
  py: 1.2,
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "12px",
  backgroundColor: "#7dfc8d",
  color: "#000",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#6be07c",
  },
};
