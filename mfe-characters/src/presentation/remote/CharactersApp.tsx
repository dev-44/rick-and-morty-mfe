import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppQueryProvider } from "../providers/QueryProvider";
import { CharactersPage } from "../pages/CharactersPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { ThemeProvider } from "components-library"

export const CharactersApp: React.FC = () => {
  return (
          <ThemeProvider>
    <AppQueryProvider>

      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<CharactersPage />} />

        {/* Ruta interna de favoritos */}
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

    </AppQueryProvider>
      </ThemeProvider>
  );
};

export default CharactersApp;
