import type { CharacterRepository } from "../../domain/repositories/CharacterRepository";
import type { EpisodeRepository } from "../../domain/repositories/EpisodeRepository";
import type { CharacterFilters } from "../../domain/value-objects/CharacterFilters";
import type { CharacterCardData } from "../../domain/dto/CharacterCardData";
import type { Character } from "../../domain/entities/Character";

export const fetchCharacterCardDataUseCase = async (
  characterRepository: CharacterRepository,
  episodeRepository: EpisodeRepository,
  filters: CharacterFilters
): Promise<CharacterCardData[]> => {
  const characters: Character[] = await characterRepository.getCharacters(
    filters
  );

  const cardData = await Promise.all(
    characters.map(async (character) => {
      let firstAppearance = "Unknown";

      // Obtener nombre del primer episodio si existe
      if (character.episode && character.episode.length > 0) {
        try {
          const firstEpisodeUrl = character.episode[0];

          // Ajusta el método según tu EpisodeRepository:
          // por ejemplo getEpisodeByUrl(url) o getEpisodeById(id)
          firstAppearance = await episodeRepository.getEpisodeName(
            firstEpisodeUrl
          );
        } catch {
          // Silenciamos el error y dejamos "Unknown"
        }
      }

      const processedData: CharacterCardData = {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image,
        lastLocation: character.location?.name || "Unknown",
        firstAppearance,
      };

      return processedData;
    })
  );

  return cardData;
};
