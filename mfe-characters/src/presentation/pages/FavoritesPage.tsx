import React from "react";
import { useFavoritesStore } from "../state/favorites.store";
import { CharacterCard } from "components-library";
import { Container, Box, Typography } from "@mui/material";
import { HomeHeader } from "../components/HomeHeader";

export const FavoritesPage: React.FC = () => {
  const favorites = useFavoritesStore(s => s.favorites);
  const toggleFavorite = useFavoritesStore(s => s.toggleFavorite);
  const isFavorite = useFavoritesStore(s => s.isFavorite);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <HomeHeader />
      <Typography variant="h4" sx={{ my: 3 }}>Favoritos</Typography>

      {favorites.length === 0 && (
        <Typography>Todavia no hay favoritos</Typography>
      )}

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
        }}
      >
        {favorites.map(c => (
          <CharacterCard
            key={c.id}
            character={c}
            isFavorite={isFavorite(c.id)}
            onToggleFavorite={() => toggleFavorite(c)}
          />
        ))}
      </Box>
    </Container>
  );
};
