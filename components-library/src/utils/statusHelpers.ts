// src/utils/statusHelpers.ts
import { CharacterStatus } from "../types/Character";

/**
 * Normaliza el status del personaje a un formato estándar
 * Maneja múltiples idiomas y variaciones
 *
 * @param {string} status - Status del personaje
 * @returns {string} Status normalizado
 */
export const normalizeStatus = (status: string): string => {
  const statusMap: { [key: string]: string } = {
    Vivo: "alive",
    Alive: "alive",
    alive: "alive",
    Muerto: "dead",
    Dead: "dead",
    dead: "dead",
    Desconocido: "unknown",
    Unknown: "unknown",
    unknown: "unknown",
  };

  return statusMap[status] || "unknown";
};

/**
 * Obtiene el status en español
 *
 * @param {string} status - Status del personaje
 * @returns {string} Status en español
 */
export const getStatusInSpanish = (status: string): CharacterStatus => {
  const normalized = normalizeStatus(status);

  const spanishMap: { [key: string]: CharacterStatus } = {
    alive: "Vivo",
    dead: "Muerto",
    unknown: "Desconocido",
  };

  return spanishMap[normalized] || "Desconocido";
};

/**
 * Obtiene el status en inglés
 *
 * @param {string} status - Status del personaje
 * @returns {string} Status en inglés
 */
export const getStatusInEnglish = (status: string): CharacterStatus => {
  const normalized = normalizeStatus(status);

  const englishMap: { [key: string]: CharacterStatus } = {
    alive: "Alive",
    dead: "Dead",
    unknown: "unknown",
  };

  return englishMap[normalized] || "unknown";
};

/**
 * Valida si un status es válido
 *
 * @param {string} status - Status a validar
 * @returns {boolean} true si es válido
 */
export const isValidStatus = (status: string): boolean => {
  const validStatuses = [
    "Vivo",
    "Alive",
    "alive",
    "Muerto",
    "Dead",
    "dead",
    "Desconocido",
    "Unknown",
    "unknown",
  ];

  return validStatuses.includes(status);
};
