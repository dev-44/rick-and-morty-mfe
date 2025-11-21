// src/store/characterStore.ts
import { create } from "zustand";
import type { Character } from "../types/Character";

interface CharacterState {
  characters: Character[];
  selectedCharacter: Character | null;
}

interface CharacterActions {
  addCharacter: (character: Character) => void;
  removeCharacter: (id: string) => void;
  updateCharacter: (id: string, updates: Partial<Character>) => void;
  selectCharacter: (character: Character | null) => void;
  setCharacters: (characters: Character[]) => void;
  clearCharacters: () => void;
}

export const useCharacterStore = create<CharacterState & CharacterActions>(
  (set) => ({
    // Estado inicial
    characters: [],
    selectedCharacter: null,

    // Acciones
    addCharacter: (character) =>
      set((state) => ({
        characters: [...state.characters, character],
      })),

    removeCharacter: (id) =>
      set((state) => ({
        characters: state.characters.filter((c) => c.id !== id),
      })),

    updateCharacter: (id, updates) =>
      set((state) => ({
        characters: state.characters.map((c) =>
          c.id === id ? { ...c, ...updates } : c
        ),
      })),

    selectCharacter: (character) => set({ selectedCharacter: character }),

    setCharacters: (characters) => set({ characters }),

    clearCharacters: () => set({ characters: [], selectedCharacter: null }),
  })
);

// Selectores
export const selectCharacters = (state: CharacterState & CharacterActions) =>
  state.characters;

export const selectSelectedCharacter = (
  state: CharacterState & CharacterActions
) => state.selectedCharacter;

export const selectCharacterById =
  (id: string) => (state: CharacterState & CharacterActions) =>
    state.characters.find((c) => c.id === id);
