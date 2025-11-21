import { create } from "zustand";
import type { CharacterCardData } from "../../domain/dto/CharacterCardData";

interface State {
  selected: CharacterCardData | null;
  select: (c: CharacterCardData | null) => void;
}

export const useSelectedCharacterStore = create<State>((set) => ({
  selected: null,
  select: (c) => set({ selected: c }),
}));
