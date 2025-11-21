// src/store/characterStore.ts
import { create } from "zustand";
export const useCharacterStore = create((set) => ({
    // Estado inicial
    characters: [],
    selectedCharacter: null,
    // Acciones
    addCharacter: (character) => set((state) => ({
        characters: [...state.characters, character],
    })),
    removeCharacter: (id) => set((state) => ({
        characters: state.characters.filter((c) => c.id !== id),
    })),
    updateCharacter: (id, updates) => set((state) => ({
        characters: state.characters.map((c) => c.id === id ? { ...c, ...updates } : c),
    })),
    selectCharacter: (character) => set({ selectedCharacter: character }),
    setCharacters: (characters) => set({ characters }),
    clearCharacters: () => set({ characters: [], selectedCharacter: null }),
}));
// Selectores
export const selectCharacters = (state) => state.characters;
export const selectSelectedCharacter = (state) => state.selectedCharacter;
export const selectCharacterById = (id) => (state) => state.characters.find((c) => c.id === id);
