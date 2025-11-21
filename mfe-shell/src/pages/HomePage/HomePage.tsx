import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  homeContainerSx,
  backgroundImageSx,
  logoSx,
  contentWrapperSx,
  titleSx,
  subtitleSx,
  buttonSx,
} from "./HomePage.styles";
import { useNavigate } from "react-router-dom";

import bgImage from "../../assets/bg-home.svg"; 
import logo from "../../assets/logo.svg";       

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={homeContainerSx}>
      {/* Imagen de fondo */}
      <Box component="img" src={bgImage} alt="Background" sx={backgroundImageSx} />

      {/* Contenido centrado */}
      <Box sx={contentWrapperSx}>
        {/* Logo */}
        <Box component="img" src={logo} alt="Rick & Morty Logo" sx={logoSx} />

        {/* Título */}
        <Typography variant="h3" sx={titleSx}>
          Bienvenido a Rick and Morty
        </Typography>

        {/* Subtítulo */}
        <Typography variant="body1" sx={subtitleSx}>
          Ingresa al buscador de personajes, y diviértete agregando a tus favoritos
        </Typography>

        {/* Botón */}
        <Button sx={buttonSx} onClick={() => navigate("/characters")}>
          Comenzar
        </Button>
      </Box>
    </Box>
  );
};
