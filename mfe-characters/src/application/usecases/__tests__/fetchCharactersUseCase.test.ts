import { describe, it, expect, vi } from "vitest";
import { fetchCharactersUseCase } from "../fetchCharactersUseCase";
import type { CharacterRepository } from "../../../domain/repositories/CharacterRepository";
import type { Character } from "../../../domain/entities/Character";

describe("fetchCharactersUseCase", () => {
  it("llama al repositorio y devuelve personajes", async () => {
    const characters: Character[] = [
      { id: 1, name: "Rick", status: "Alive", species: "Human" } as any,
    ];

    const repo: CharacterRepository = {
      getCharacters: vi.fn().mockResolvedValue(characters),
    };

    const result = await fetchCharactersUseCase(repo, { page: 1 });

    expect(repo.getCharacters).toHaveBeenCalledWith({ page: 1 });
    expect(result).toEqual(characters);
  });
});
