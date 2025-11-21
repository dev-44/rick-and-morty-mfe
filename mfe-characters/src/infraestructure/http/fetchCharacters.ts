import type { Character } from "../../domain/entities/Character";
import type { CharacterFilters } from "../../domain/value-objects/CharacterFilters";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (
  filters: CharacterFilters
): Promise<Character[]> => {
  const params = new URLSearchParams();
  params.set("page", String(filters.page));

  if (filters.name) params.set("name", filters.name);
  if (filters.status) params.set("status", filters.status);

  const res = await fetch(`${BASE_URL}/character?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  const data = await res.json();
  return data.results;
};
