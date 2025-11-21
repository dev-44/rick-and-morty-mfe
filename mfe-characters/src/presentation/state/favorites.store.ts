import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CharacterCardData } from "../../domain/dto/CharacterCardData";

interface FavoritesState {
  favorites: CharacterCardData[];
  toggleFavorite: (c: CharacterCardData) => void;
  isFavorite: (id: number | string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (c) => {
        const list = get().favorites;
        const exists = list.some((x) => x.id === c.id);

        set({
          favorites: exists ? list.filter((x) => x.id !== c.id) : [...list, c],
        });
      },
      isFavorite: (id) => get().favorites.some((x) => x.id === id),
    }),
    {
      name: "characters-favorites", // clave en localStorage
    }
  )
);
