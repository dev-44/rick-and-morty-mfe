import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";

import {
  headerContainerSx,
  backgroundImageSx,
  contentWrapperSx,
  logoSx,
  searchWrapperSx,
  searchIconSx,
  textFieldSx
} from "./HomeHeader.styles";

const headerBg = new URL("../../../assets/header-bg.svg", import.meta.url).href;
const logo = new URL("../../../assets/logo.svg", import.meta.url).href;
const searchIcon = new URL("../../../assets/glass-icon.svg", import.meta.url).href;

interface HomeHeaderProps {
  search?: string;
  onSearchChange?: (value: string) => void;
  handleSearch?: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  search = "",
  onSearchChange,
  handleSearch
}) => {
  return (
    <Box sx={headerContainerSx}>
      {/* Imagen de fondo */}
      <Box
        component="img"
        src={headerBg}
        alt="Rick and Morty background"
        sx={backgroundImageSx}
      />

      {/* Contenido */}
      <Box sx={contentWrapperSx}>
        <Box component="img" src={logo} alt="Rick and Morty logo" sx={logoSx} />
        {onSearchChange && handleSearch && (
          <TextField
            fullWidth
            placeholder="Buscar personaje por nombre"
            value={search}
            onChange={(e) => onSearchChange?.(e.target.value)}
            slotProps={{
              input: {
                onKeyDown: (e) => {
                if (e.key === "Enter") {
                  handleSearch?.();
                }
              },
                startAdornment: (
                  <InputAdornment position="start" onClick={handleSearch} >
                    <Box component="img" src={searchIcon} alt="Search Icon" sx={searchIconSx} />
                  </InputAdornment>
                ),
                sx: textFieldSx,
              },
            }}
          />
        )}
        <Box sx={searchWrapperSx}>

        </Box>
      </Box>
    </Box>
  );
};
