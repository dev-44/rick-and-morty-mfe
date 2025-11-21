import React from "react";
import { CharacterCard } from "components-library";
import type { CharacterCardData } from "../../domain/dto/CharacterCardData";
import { Box, Container, Typography } from "@mui/material";
import { useFavoritesStore } from "../state/favorites.store";

interface Props {
  characters: CharacterCardData[];
  selectedId?: number | string;
  onSelect?: (character: CharacterCardData) => void;
}

export const CharactersGrid: React.FC<Props> = ({
  characters,
  onSelect,
  selectedId,
}) => {

  // Acceso al store remoto
  const toggleFavorite = useFavoritesStore(s => s.toggleFavorite);
  const isFavorite = useFavoritesStore(s => s.isFavorite);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {characters.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              },
              gap: 3,
              justifyItems: "center",
            }}
          >
      {characters.map((c) => (
        <CharacterCard
          key={c.id}
          character={c}
          elevated={selectedId === c.id}
          onCardClick={() => onSelect?.(c)}
          isFavorite={isFavorite(c.id)}
          onToggleFavorite={() => toggleFavorite(c)}
        />
      ))}
      </Box>) : (
                  <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >
            <Typography variant="h6">
              No Characters
            </Typography>
          </Box>
      )}
      </Container>
    </Box>
  );
};
