import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Box,
  Typography,
  Button,
  ButtonGroup,
  Chip,
  Stack,
} from "@mui/material";
import { CharacterCard } from "./components/CharacterCard";
import { useCharacters } from "../src/hooks/useCharacters";
import { mockCharacters } from "../src/mocks/characters";
import type { Character } from "./types/Character";

function App() {
  const { t, i18n } = useTranslation();
  const {
    characters,
    selectedCharacter,
    setCharacters,
    selectCharacter,
    getStats,
  } = useCharacters();
  useEffect(() => {
    setCharacters(mockCharacters);
  }, [setCharacters]);

  /**
   * Cambia el idioma de la aplicación
   * @param {string} lng - Código del idioma ('es' o 'en')
   */
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  /**
   * Handler para cuando se hace click en una tarjeta
   * @param {Character} character - Personaje seleccionado
   */
  const handleCardClick = (character: Character) => {
    selectCharacter(character);
  };

  // Obtener estadísticas
  const stats = getStats();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Header con título y selector de idioma */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            {t("app.title")}
          </Typography>

          <ButtonGroup variant="outlined" aria-label="language selector">
            <Button
              onClick={() => changeLanguage("es")}
              variant={i18n.language === "es" ? "contained" : "outlined"}
            >
              Español
            </Button>
            <Button
              onClick={() => changeLanguage("en")}
              variant={i18n.language === "en" ? "contained" : "outlined"}
            >
              English
            </Button>
          </ButtonGroup>
        </Box>

        {/* Descripción y estadísticas */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {t("app.description")}
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Chip
              label={`Total: ${stats.total}`}
              color="primary"
              variant="outlined"
            />
            <Chip
              label={`${t("characterCard.status.alive")}: ${stats.alive}`}
              sx={{
                bgcolor: "#4CAF50",
                color: "white",
                "& .MuiChip-label": { fontWeight: 500 },
              }}
            />
            <Chip
              label={`${t("characterCard.status.dead")}: ${stats.dead}`}
              sx={{
                bgcolor: "#F44336",
                color: "white",
                "& .MuiChip-label": { fontWeight: 500 },
              }}
            />
            <Chip
              label={`${t("characterCard.status.unknown")}: ${stats.unknown}`}
              sx={{
                bgcolor: "#9E9E9E",
                color: "white",
                "& .MuiChip-label": { fontWeight: 500 },
              }}
            />
          </Stack>
        </Box>

        {/* Personaje seleccionado */}
        {selectedCharacter && (
          <Box
            sx={{
              mb: 3,
              p: 2,
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">
              <strong>{t("app.selectCharacter")}:</strong>{" "}
              {selectedCharacter.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => selectCharacter(null)}
            >
              {t("common.cancel")}
            </Button>
          </Box>
        )}

        {/* Grid de tarjetas */}
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
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onCardClick={handleCardClick}
                elevated={selectedCharacter?.id === character.id}
              />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              {t("app.noCharacters")}
            </Typography>
          </Box>
        )}

        {/* Footer */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 1, display: "block" }}
          >
            React + TypeScript + Material UI + Zustand + i18next + Vitest
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
