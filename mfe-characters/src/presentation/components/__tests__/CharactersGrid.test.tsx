import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CharactersGrid } from "../CharactersGrid";
import type { CharacterCardData } from "../../../domain/dto/CharacterCardData";

vi.mock("components-library", () => ({
  CharacterCard: ({ character }: any) => (
    <div>{character.name}</div> 
  ),
}));

const mockCharacters: CharacterCardData[] = [
  {
    id: "1",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "null",
    lastLocation: "null",
    firstAppearance: "null",
  },
];

describe("CharactersGrid", () => {
  it("renderiza los personajes", () => {
    render(<CharactersGrid characters={mockCharacters} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });

  it("muestra mensaje vacío", () => {
    render(<CharactersGrid characters={[]} />);
    expect(screen.getByText("No Characters")).toBeInTheDocument();
  });
});
