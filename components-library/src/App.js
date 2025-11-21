import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Box, Typography, Button, ButtonGroup, Chip, Stack, } from "@mui/material";
import { CharacterCard } from "./components/CharacterCard";
import { useCharacters } from "../src/hooks/useCharacters";
import { mockCharacters } from "../src/mocks/characters";
function App() {
    const { t, i18n } = useTranslation();
    const { characters, selectedCharacter, setCharacters, selectCharacter, getStats, } = useCharacters();
    useEffect(() => {
        setCharacters(mockCharacters);
    }, [setCharacters]);
    /**
     * Cambia el idioma de la aplicación
     * @param {string} lng - Código del idioma ('es' o 'en')
     */
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    /**
     * Handler para cuando se hace click en una tarjeta
     * @param {Character} character - Personaje seleccionado
     */
    const handleCardClick = (character) => {
        selectCharacter(character);
    };
    // Obtener estadísticas
    const stats = getStats();
    return (_jsx(Box, { sx: {
            minHeight: "100vh",
            backgroundColor: "background.default",
            py: 4,
        }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 4,
                        flexWrap: "wrap",
                        gap: 2,
                    }, children: [_jsx(Typography, { variant: "h3", component: "h1", sx: {
                                fontWeight: 700,
                                color: "text.primary",
                                fontSize: { xs: "2rem", md: "3rem" },
                            }, children: t("app.title") }), _jsxs(ButtonGroup, { variant: "outlined", "aria-label": "language selector", children: [_jsx(Button, { onClick: () => changeLanguage("es"), variant: i18n.language === "es" ? "contained" : "outlined", children: "Espa\u00F1ol" }), _jsx(Button, { onClick: () => changeLanguage("en"), variant: i18n.language === "en" ? "contained" : "outlined", children: "English" })] })] }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 2 }, children: t("app.description") }), _jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", useFlexGap: true, children: [_jsx(Chip, { label: `Total: ${stats.total}`, color: "primary", variant: "outlined" }), _jsx(Chip, { label: `${t("characterCard.status.alive")}: ${stats.alive}`, sx: {
                                        bgcolor: "#4CAF50",
                                        color: "white",
                                        "& .MuiChip-label": { fontWeight: 500 },
                                    } }), _jsx(Chip, { label: `${t("characterCard.status.dead")}: ${stats.dead}`, sx: {
                                        bgcolor: "#F44336",
                                        color: "white",
                                        "& .MuiChip-label": { fontWeight: 500 },
                                    } }), _jsx(Chip, { label: `${t("characterCard.status.unknown")}: ${stats.unknown}`, sx: {
                                        bgcolor: "#9E9E9E",
                                        color: "white",
                                        "& .MuiChip-label": { fontWeight: 500 },
                                    } })] })] }), selectedCharacter && (_jsxs(Box, { sx: {
                        mb: 3,
                        p: 2,
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsxs(Typography, { variant: "body1", children: [_jsxs("strong", { children: [t("app.selectCharacter"), ":"] }), " ", selectedCharacter.name] }), _jsx(Button, { variant: "contained", color: "secondary", size: "small", onClick: () => selectCharacter(null), children: t("common.cancel") })] })), characters.length > 0 ? (_jsx(Box, { sx: {
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(2, 1fr)",
                        },
                        gap: 3,
                        justifyItems: "center",
                    }, children: characters.map((character) => (_jsx(CharacterCard, { character: character, onCardClick: handleCardClick, elevated: selectedCharacter?.id === character.id }, character.id))) })) : (_jsx(Box, { sx: {
                        textAlign: "center",
                        py: 8,
                    }, children: _jsx(Typography, { variant: "h6", color: "text.secondary", children: t("app.noCharacters") }) })), _jsx(Box, { sx: {
                        mt: 6,
                        pt: 3,
                        borderTop: "1px solid",
                        borderColor: "divider",
                        textAlign: "center",
                    }, children: _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 1, display: "block" }, children: "React + TypeScript + Material UI + Zustand + i18next + Vitest" }) })] }) }));
}
export default App;
