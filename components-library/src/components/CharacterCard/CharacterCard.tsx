import React from "react";
import { useTranslation } from "react-i18next";

import { Card, CardMedia, Box, Typography } from "@mui/material";

import {
  getCardStyles,
  headerContainerSx,
  speciesTextSx,
  cardMediaSx,
  contentWrapperSx,
  bottomSectionSx,
  bottomItemSx,
  speciesContainerSx,
  chipContainerSx,
  imageContainerSx,
  favoriteIconContainerSx,
  characterNameSx,
} from "./CharacterCard.styles";

import { StatusChip } from "../StatusChip/StatusChip";
import { CharacterCardProps } from "./CharacterCard.types";

import { FavoriteIcon, FavoriteActiveIcon } from "@shared/icons";

/**
 * Componente CharacterCard
 *
 * Principios SOLID aplicados:
 * ✅ Single Responsibility: SOLO renderiza una tarjeta con datos ya procesados
 * ✅ Open/Closed: Extensible mediante props sin modificar el código
 * ✅ Liskov Substitution: Puede ser reemplazado por variantes sin romper funcionalidad
 * ✅ Interface Segregation: Props específicas y mínimas necesarias
 * ✅ Dependency Inversion: Depende de abstracciones (props, tipos)
 *
 * @param {CharacterCardProps} props - Propiedades del componente
 * @returns {JSX.Element} Tarjeta de personaje renderizada
 */
export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onCardClick,
  elevated = false,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const { t } = useTranslation();

  if (!character) {
    return null;
  }

  const handleCardClick = () => {
    if (onCardClick) onCardClick(character);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={getCardStyles(elevated, !!onCardClick)}
      role="article"
      aria-label={`${t("characterCard.title")} ${character.name}`}
    >
      <Box sx={imageContainerSx}>
        {/* Image */}
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={cardMediaSx}
          loading="lazy"
        />
        <Box sx={favoriteIconContainerSx} onClick={onToggleFavorite}>
          {isFavorite ? <FavoriteActiveIcon /> : <FavoriteIcon />}
        </Box>
      </Box>

      <Box sx={contentWrapperSx}>
        {/* Header */}
        <Box sx={headerContainerSx}>
          <Typography variant="h3" sx={characterNameSx}>
            {character.name}
          </Typography>
          <Box sx={chipContainerSx}>
            <StatusChip status={character.status} />
          </Box>
        </Box>

        {/* Species */}
        <Box sx={speciesContainerSx}>
          <Typography variant="bodySmall" sx={speciesTextSx}>
            {character.species}
          </Typography>
        </Box>

        {/* Bottom section */}
        <Box sx={bottomSectionSx}>
          <Box sx={bottomItemSx}>
            <Typography variant="h5">
              {t("characterCard.lastKnownLocation")}
            </Typography>
            <Typography variant="bodySmall">
              {character.lastLocation}
            </Typography>
          </Box>

          <Box sx={bottomItemSx}>
            <Typography variant="h5">
              {t("characterCard.firstSeenIn")}
            </Typography>
            <Typography variant="bodySmall">
              {character.firstAppearance}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default React.memo(CharacterCard);
