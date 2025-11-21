type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface CharacterCardData {
  id: number | string;
  name: string;
  status: CharacterStatus;
  species: string;
  image: string;
  lastLocation: string;
  firstAppearance: string;
}
