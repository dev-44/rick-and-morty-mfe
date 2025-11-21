import type { Character } from "../entities/Character";
import type { CharacterFilters } from "../value-objects/CharacterFilters";

export interface CharacterRepository {
  getCharacters(filters: CharacterFilters): Promise<Character[]>;
}
