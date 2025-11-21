import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { getCardStyles, headerContainerSx, speciesTextSx, cardMediaSx, contentWrapperSx, bottomSectionSx, bottomItemSx, speciesContainerSx, chipContainerSx, imageContainerSx, favoriteIconContainerSx, characterNameSx, } from "./CharacterCard.styles";
import { StatusChip } from "../StatusChip/StatusChip";
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
export const CharacterCard = ({ character, onCardClick, elevated = false, isFavorite = false, onToggleFavorite, }) => {
    const { t } = useTranslation();
    if (!character) {
        return null;
    }
    const handleCardClick = () => {
        if (onCardClick)
            onCardClick(character);
    };
    return (_jsxs(Card, { onClick: handleCardClick, sx: getCardStyles(elevated, !!onCardClick), role: "article", "aria-label": `${t("characterCard.title")} ${character.name}`, children: [_jsxs(Box, { sx: imageContainerSx, children: [_jsx(CardMedia, { component: "img", image: character.image, alt: character.name, sx: cardMediaSx, loading: "lazy" }), _jsx(Box, { sx: favoriteIconContainerSx, onClick: onToggleFavorite, children: isFavorite ? _jsx(FavoriteActiveIcon, {}) : _jsx(FavoriteIcon, {}) })] }), _jsxs(Box, { sx: contentWrapperSx, children: [_jsxs(Box, { sx: headerContainerSx, children: [_jsx(Typography, { variant: "h3", sx: characterNameSx, children: character.name }), _jsx(Box, { sx: chipContainerSx, children: _jsx(StatusChip, { status: character.status }) })] }), _jsx(Box, { sx: speciesContainerSx, children: _jsx(Typography, { variant: "bodySmall", sx: speciesTextSx, children: character.species }) }), _jsxs(Box, { sx: bottomSectionSx, children: [_jsxs(Box, { sx: bottomItemSx, children: [_jsx(Typography, { variant: "h5", children: t("characterCard.lastKnownLocation") }), _jsx(Typography, { variant: "bodySmall", children: character.lastLocation })] }), _jsxs(Box, { sx: bottomItemSx, children: [_jsx(Typography, { variant: "h5", children: t("characterCard.firstSeenIn") }), _jsx(Typography, { variant: "bodySmall", children: character.firstAppearance })] })] })] })] }));
};
export default React.memo(CharacterCard);
