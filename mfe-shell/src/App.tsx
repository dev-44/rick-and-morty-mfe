import React from "react";
import { Routes, Route } from "react-router-dom";
// IMPORT REMOTO via Module Federation
const CharactersApp = React.lazy(() => import("characters/CharactersApp"));

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App: React.FC = () => {
  return (
    <>
      <main>
        <React.Suspense fallback={<div>Cargando microfrontend...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters/*" element={<CharactersApp />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </React.Suspense>
      </main>
    </>
  );
};
