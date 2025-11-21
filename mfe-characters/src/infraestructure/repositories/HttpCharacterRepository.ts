import type { CharacterRepository } from "../../domain/repositories/CharacterRepository";
import type { Character } from "../../domain/entities/Character";
import type { CharacterFilters } from "../../domain/value-objects/CharacterFilters";
import { fetchCharacters } from "../http/fetchCharacters";

export class HttpCharacterRepository implements CharacterRepository {
  async getCharacters(filters: CharacterFilters): Promise<Character[]> {
    return fetchCharacters(filters);
  }
}
