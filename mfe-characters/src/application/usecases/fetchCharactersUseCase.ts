import type { Character } from "../../domain/entities/Character";
import type { CharacterRepository } from "../../domain/repositories/CharacterRepository";
import type { CharacterFilters } from "../../domain/value-objects/CharacterFilters";

export const fetchCharactersUseCase = async (
  repository: CharacterRepository,
  filters: CharacterFilters
): Promise<Character[]> => {
  return repository.getCharacters(filters);
};
