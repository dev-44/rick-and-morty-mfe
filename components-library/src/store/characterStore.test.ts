// src/store/characterStore.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCharacterStore } from "./characterStore";
import type { Character } from "../types/Character";

// Mock de personajes para tests
const mockCharacter1: Character = {
  id: "1",
  name: "Morty Smith",
  species: "Humano",
  lastLocation: "Story Train",
  firstAppearance: "Never Ricking Morty",
  status: "Vivo",
  image: "https://example.com/morty.jpg",
};

const mockCharacter2: Character = {
  id: "2",
  name: "Rick Sanchez",
  species: "Humano",
  lastLocation: "Citadel of Ricks",
  firstAppearance: "Pilot",
  status: "Vivo",
  image: "https://example.com/rick.jpg",
};

describe("characterStore", () => {
  // Limpiar el store antes de cada test
  beforeEach(() => {
    const { result } = renderHook(() => useCharacterStore());
    act(() => {
      result.current.clearCharacters();
    });
  });

  describe("Estado inicial", () => {
    it("debe inicializar con un array vacío de personajes", () => {
      const { result } = renderHook(() => useCharacterStore());
      expect(result.current.characters).toEqual([]);
    });

    it("debe inicializar sin personaje seleccionado", () => {
      const { result } = renderHook(() => useCharacterStore());
      expect(result.current.selectedCharacter).toBeNull();
    });
  });

  describe("addCharacter", () => {
    it("debe agregar un personaje al store", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.addCharacter(mockCharacter1);
      });

      expect(result.current.characters).toHaveLength(1);
      expect(result.current.characters[0]).toEqual(mockCharacter1);
    });

    it("debe agregar múltiples personajes", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.addCharacter(mockCharacter2);
      });

      expect(result.current.characters).toHaveLength(2);
      expect(result.current.characters).toContainEqual(mockCharacter1);
      expect(result.current.characters).toContainEqual(mockCharacter2);
    });

    it("debe mantener el orden de inserción", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.addCharacter(mockCharacter2);
      });

      expect(result.current.characters[0].id).toBe("1");
      expect(result.current.characters[1].id).toBe("2");
    });
  });

  describe("removeCharacter", () => {
    beforeEach(() => {
      const { result } = renderHook(() => useCharacterStore());
      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.addCharacter(mockCharacter2);
      });
    });

    it("debe eliminar un personaje por ID", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.removeCharacter("1");
      });

      expect(result.current.characters).toHaveLength(1);
      expect(result.current.characters[0].id).toBe("2");
    });

    it("no debe hacer nada si el ID no existe", () => {
      const { result } = renderHook(() => useCharacterStore());
      const initialLength = result.current.characters.length;

      act(() => {
        result.current.removeCharacter("999");
      });

      expect(result.current.characters).toHaveLength(initialLength);
    });
  });

  describe("updateCharacter", () => {
    beforeEach(() => {
      const { result } = renderHook(() => useCharacterStore());
      act(() => {
        result.current.addCharacter(mockCharacter1);
      });
    });

    it("debe actualizar un personaje existente", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.updateCharacter("1", { name: "Morty Updated" });
      });

      expect(result.current.characters[0].name).toBe("Morty Updated");
    });

    it("debe actualizar solo los campos especificados", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.updateCharacter("1", { status: "Muerto" });
      });

      expect(result.current.characters[0].status).toBe("Muerto");
      expect(result.current.characters[0].name).toBe("Morty Smith");
      expect(result.current.characters[0].species).toBe("Humano");
    });

    it("no debe hacer nada si el ID no existe", () => {
      const { result } = renderHook(() => useCharacterStore());
      const originalCharacter = { ...result.current.characters[0] };

      act(() => {
        result.current.updateCharacter("999", { name: "Test" });
      });

      expect(result.current.characters[0]).toEqual(originalCharacter);
    });
  });

  describe("selectCharacter", () => {
    it("debe seleccionar un personaje", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.selectCharacter(mockCharacter1);
      });

      expect(result.current.selectedCharacter).toEqual(mockCharacter1);
    });

    it("debe poder deseleccionar un personaje", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.selectCharacter(mockCharacter1);
        result.current.selectCharacter(null);
      });

      expect(result.current.selectedCharacter).toBeNull();
    });

    it("debe poder cambiar entre personajes", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.selectCharacter(mockCharacter1);
      });
      expect(result.current.selectedCharacter?.id).toBe("1");

      act(() => {
        result.current.selectCharacter(mockCharacter2);
      });
      expect(result.current.selectedCharacter?.id).toBe("2");
    });
  });

  describe("setCharacters", () => {
    it("debe establecer una lista completa de personajes", () => {
      const { result } = renderHook(() => useCharacterStore());
      const characters = [mockCharacter1, mockCharacter2];

      act(() => {
        result.current.setCharacters(characters);
      });

      expect(result.current.characters).toEqual(characters);
    });

    it("debe reemplazar la lista existente", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.setCharacters([mockCharacter2]);
      });

      expect(result.current.characters).toHaveLength(1);
      expect(result.current.characters[0].id).toBe("2");
    });

    it("debe poder establecer una lista vacía", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.setCharacters([]);
      });

      expect(result.current.characters).toEqual([]);
    });
  });

  describe("clearCharacters", () => {
    it("debe limpiar todos los personajes", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.addCharacter(mockCharacter2);
        result.current.clearCharacters();
      });

      expect(result.current.characters).toEqual([]);
    });

    it("debe limpiar el personaje seleccionado", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.selectCharacter(mockCharacter1);
        result.current.clearCharacters();
      });

      expect(result.current.selectedCharacter).toBeNull();
    });

    it("debe ser idempotente", () => {
      const { result } = renderHook(() => useCharacterStore());

      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.clearCharacters();
        result.current.clearCharacters();
        result.current.clearCharacters();
      });

      expect(result.current.characters).toEqual([]);
      expect(result.current.selectedCharacter).toBeNull();
    });
  });

  describe("Integración entre acciones", () => {
    it("debe manejar un flujo completo de operaciones", () => {
      const { result } = renderHook(() => useCharacterStore());

      // Agregar personajes
      act(() => {
        result.current.addCharacter(mockCharacter1);
        result.current.addCharacter(mockCharacter2);
      });
      expect(result.current.characters).toHaveLength(2);

      // Seleccionar un personaje
      act(() => {
        result.current.selectCharacter(mockCharacter1);
      });
      expect(result.current.selectedCharacter?.id).toBe("1");

      // Actualizar el personaje seleccionado
      act(() => {
        result.current.updateCharacter("1", { name: "New Name" });
      });
      expect(result.current.characters[0].name).toBe("New Name");

      // Eliminar el otro personaje
      act(() => {
        result.current.removeCharacter("2");
      });
      expect(result.current.characters).toHaveLength(1);

      // Limpiar todo
      act(() => {
        result.current.clearCharacters();
      });
      expect(result.current.characters).toEqual([]);
      expect(result.current.selectedCharacter).toBeNull();
    });
  });
});
