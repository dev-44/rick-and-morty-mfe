/**
 * Status posibles de un personaje
 */
export type CharacterStatus =
  | "Vivo"
  | "Muerto"
  | "Desconocido"
  | "Alive"
  | "Dead"
  | "unknown";

/**
 * Interface principal del personaje
 */

export interface Character {
  id: number | string;
  name: string;
  status: CharacterStatus;
  species: string;
  image: string;
  lastLocation: string;
  firstAppearance: string;
}

interface Location {
  name: string;
  url: string;
}

export interface CharacterAPI {
  // Campos obligatorios (usados en CharacterCard)
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;

  // Campos opcionales de la API
  type?: string;
  gender?: "Female" | "Male" | "Genderless" | "unknown";
  origin?: Location;
  location?: Location;
  episode?: string[];
  url?: string;
  created?: string;
}
