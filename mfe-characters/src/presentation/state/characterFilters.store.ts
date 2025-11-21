import { create } from "zustand";
import type { CharacterFilters } from "../../domain/value-objects/CharacterFilters";

interface CharacterFiltersState extends CharacterFilters {
  setPage: (page: number) => void;
  setName: (name: string) => void;
  setStatus: (status: CharacterFilters["status"]) => void;
}

export const useCharacterFiltersStore = create<CharacterFiltersState>(
  (set) => ({
    page: 1,
    name: "",
    status: undefined,

    setPage: (page) => set({ page }),
    setName: (name) => set({ name }),
    setStatus: (status) => set({ status }),
  })
);
