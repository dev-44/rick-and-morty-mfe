// src/hooks/useCharacters.ts
import { useCharacterStore } from "../store/characterStore";
import { Character } from "../types/Character";

/**
 * Hook personalizado para interactuar con el store de personajes
 * Encapsula la lógica del store para facilitar su uso
 *
 * @returns {Object} Métodos y estado para gestionar personajes
 */
export const useCharacters = () => {
  const characters = useCharacterStore((state) => state.characters);
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const removeCharacter = useCharacterStore((state) => state.removeCharacter);
  const updateCharacter = useCharacterStore((state) => state.updateCharacter);
  const selectCharacter = useCharacterStore((state) => state.selectCharacter);
  const setCharacters = useCharacterStore((state) => state.setCharacters);
  const clearCharacters = useCharacterStore((state) => state.clearCharacters);

  /**
   * Busca un personaje por ID
   */
  const findCharacterById = (id: string): Character | undefined => {
    return characters.find((char) => char.id === id);
  };

  /**
   * Filtra personajes por status
   */
  const filterByStatus = (status: string): Character[] => {
    return characters.filter((char) => char.status === status);
  };

  /**
   * Busca personajes por nombre (case insensitive)
   */
  const searchByName = (query: string): Character[] => {
    const lowerQuery = query.toLowerCase();
    return characters.filter((char) =>
      char.name.toLowerCase().includes(lowerQuery)
    );
  };

  /**
   * Obtiene estadísticas de los personajes
   */
  const getStats = () => {
    return {
      total: characters.length,
      alive: filterByStatus("Vivo").length + filterByStatus("Alive").length,
      dead: filterByStatus("Muerto").length + filterByStatus("Dead").length,
      unknown:
        filterByStatus("Desconocido").length + filterByStatus("unknown").length,
    };
  };

  return {
    // Estado
    characters,
    selectedCharacter,

    // Acciones básicas
    addCharacter,
    removeCharacter,
    updateCharacter,
    selectCharacter,
    setCharacters,
    clearCharacters,

    // Utilidades
    findCharacterById,
    filterByStatus,
    searchByName,
    getStats,
  };
};
