// src/i18n/config.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar traducciones desde archivos JSON
import translationES from "../locales/es/translation.json";
import translationEN from "../locales/en/translation.json";

/**
 * Recursos de traducción
 * Organizados por idioma con namespace 'translation'
 */
const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
};

/**
 * Configuración de i18next
 *
 * Características:
 * - Soporte para español e inglés
 * - Fallback a español por defecto
 * - Detección automática de idioma del navegador
 * - Interpolación deshabilitada (React ya escapa)
 */
i18n
  .use(initReactI18next) // Conecta i18next con React
  .init({
    resources,
    lng: "es", // Idioma por defecto
    fallbackLng: "en", // Idioma de respaldo

    // Namespace por defecto
    defaultNS: "translation",

    // Interpolación
    interpolation: {
      escapeValue: false, // React ya hace el escape por defecto
    },

    // Configuración de desarrollo
    debug: false, // Cambiar a true para debug en desarrollo

    // React specific
    react: {
      useSuspense: false, // Deshabilitar Suspense para evitar problemas
    },
  });

export default i18n;
