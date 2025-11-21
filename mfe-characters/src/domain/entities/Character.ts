/**
 * Interfaz para la ubicación en la API de Rick and Morty
 */
export interface Location {
  name: string;
  url: string;
}

/**
 * Interface principal del personaje
 */
export interface Character {
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
