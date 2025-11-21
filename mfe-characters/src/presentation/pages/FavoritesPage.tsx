import React from "react";
import { useFavoritesStore } from "../state/favorites.store";
import { CharacterCard } from "components-library";
import { Container, Box, Typography } from "@mui/material";
import { HomeHeader } from "../components/HomeHeader";
import { useNavigate } from "react-router-dom";

const arrowIcon = new URL("../../assets/arrow-icon.svg", import.meta.url).href;

export const FavoritesPage: React.FC = () => {
  const favorites = useFavoritesStore(s => s.favorites);
  const toggleFavorite = useFavoritesStore(s => s.toggleFavorite);
  const isFavorite = useFavoritesStore(s => s.isFavorite);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <HomeHeader />
      <Box component="img" src={arrowIcon} alt="Search Icon" onClick={handleGoBack} sx={{ mt: 2, cursor: 'pointer'}} />
      <Typography variant="h4" sx={{ mt: 1, mb: 3 }}>Favoritos</Typography>

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
