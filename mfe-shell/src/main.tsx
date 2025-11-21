import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
// import { ThemeProvider, i18n } from "components-library";
import { ThemeProvider } from "components-library";
// import { I18nextProvider } from 'react-i18next';

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      {/* <I18nextProvider i18n={i18n}> */}
        <App />
       {/* </I18nextProvider> */}
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
