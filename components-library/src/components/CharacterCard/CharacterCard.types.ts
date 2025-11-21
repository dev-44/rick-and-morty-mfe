import { Character } from "@/types/Character";

export interface CharacterCardProps {
  character: Character;
  onCardClick?: (character: Character) => void;
  elevated?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}
