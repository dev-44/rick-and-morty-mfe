import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppQueryProvider } from "../providers/QueryProvider";
import { CharactersPage } from "../pages/CharactersPage";
import { FavoritesPage } from "../pages/FavoritesPage";
// import { ThemeProvider, i18n } from "components-library"
import { ThemeProvider } from "components-library"
// import { I18nextProvider } from "react-i18next";

export const CharactersApp: React.FC = () => {
  return (
          <ThemeProvider>
        {/* <I18nextProvider i18n={i18n}> */}
    <AppQueryProvider>

      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<CharactersPage />} />

        {/* Ruta interna de favoritos */}
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

    </AppQueryProvider>
          {/* </I18nextProvider> */}
      </ThemeProvider>
  );
};

export default CharactersApp;
