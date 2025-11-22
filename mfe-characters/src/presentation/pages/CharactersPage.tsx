import React, { useEffect, useState } from "react";
import { CharacterFilters as CharacterFiltersComponent } from "../components/CharacterFilters";
import { CharactersGrid } from "../components/CharactersGrid";
import { useCharacterFiltersStore } from "../state/characterFilters.store";
import { useSelectedCharacterStore } from "../state/selectedCharacter.store";
import { fetchCharacterCardDataUseCase } from "../../application/usecases/fetchCharacterCardDataUseCase";
import { HttpCharacterRepository } from "../../infraestructure/repositories/HttpCharacterRepository";
import { HttpEpisodeRepository } from "../../infraestructure/repositories/HttpEpisodeRepository";
import type { CharacterCardData } from "../../domain/dto/CharacterCardData";
import type { CharacterFilters as CharacterFiltersVO } from "../../domain/value-objects/CharacterFilters";

export const CharactersPage: React.FC = () => {
  const { name, status, page } = useCharacterFiltersStore();
  const { selected, select } = useSelectedCharacterStore();

  const [characters, setCharacters] = useState<CharacterCardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      setError(null);

      const filters: CharacterFiltersVO = {
        name,
        status,
        page,
      };

      const characterRepository = new HttpCharacterRepository();
      const episodeRepository = new HttpEpisodeRepository();

      const data = await fetchCharacterCardDataUseCase(
        characterRepository,
        episodeRepository,
        filters
      );

      setCharacters(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(`Error al cargar personajes: ${e.message}`);
      } else {
        setError("Error desconocido al cargar personajes");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, page, name]);

  return (
    <div style={{ padding: "24px" }}>
      <CharacterFiltersComponent />

      {loading && <p>Cargando personajes...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <CharactersGrid characters={characters} selectedId={selected?.id} onSelect={select} />
      )}
    </div>
  );
};

export default CharactersPage;
