import type { SxProps, Theme } from "@mui/material";

export const headerContainerSx: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 200,
  overflow: "hidden",
};

export const backgroundImageSx: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  // inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 30%",
  filter: "brightness(0.5)",
  zIndex: 0,
};

export const contentWrapperSx: SxProps<Theme> = {
  position: "relative",
  zIndex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  px: 2,
};

export const logoSx: SxProps<Theme> = {
  width: 260,
  maxWidth: "90%",
  mb: 1,
};

export const searchWrapperSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 800,
  mt: 2,
};
