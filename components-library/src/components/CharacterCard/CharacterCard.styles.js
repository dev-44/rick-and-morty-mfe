import { colors } from "@/shared/theme";
// -----------------------------
// Card styles
// -----------------------------
export const getCardStyles = (elevated, clickable) => ({
    display: "flex",
    flexDirection: "row",
    padding: 0,
    width: "496px",
    height: "137px",
    borderRadius: "12px",
    cursor: clickable ? "pointer" : "default",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: elevated ? 6 : 2,
    "&:hover": clickable
        ? {
            transform: "translateY(-4px)",
            boxShadow: 8,
        }
        : undefined,
    // Tablet / Medium screens - cambiar a vertical
    "@media (max-width: 768px)": {
        flexDirection: "column",
        width: "343px",
        height: "389px",
    },
    // Mobile / Small screens - cambiar a vertical
    "@media (max-width: 480px)": {
        flexDirection: "column",
        width: "192px",
        height: "220px",
    },
});
// -----------------------------
// Image
// -----------------------------
export const imageContainerSx = {
    position: "relative",
    display: "flex",
    width: "137px",
    height: "137px",
    minWidth: "137px", // Agrega esto para asegurar width fijo
    minHeight: "137px", // Agrega esto para asegurar height fijo
    flexShrink: 0, // Evita que el contenedor se encoja
    "@media (max-width: 768px)": {
        width: "343px",
        height: "238px",
        minWidth: "343px",
        minHeight: "238px",
    },
    "@media (max-width: 480px)": {
        width: "192px",
        height: "144px",
        minWidth: "192px",
        minHeight: "144px",
    },
};
export const favoriteIconContainerSx = {
    position: "absolute",
    top: "8px",
    left: "8px",
    zIndex: 1,
    cursor: "pointer",
    transition: "transform 0.2s ease",
    "&:hover": {
        transform: "scale(1.1)",
    },
    // Tablet
    "@media (max-width: 768px)": {
        top: "8px",
        left: "auto",
        right: "8px",
    },
    // Mobile
    "@media (max-width: 480px)": {
        top: "8px",
        left: "auto",
        right: "8px",
    },
};
export const cardMediaSx = {
    // display: "flex",
    // flexDirection: "column",
    display: "block",
    width: "100%",
    height: "100%",
    padding: 0,
    gap: "8px",
    objectFit: "cover",
    objectPosition: "center", // Centra la imagen
    // Tablet - mantener imagen cuadrada
    "@media (max-width: 768px)": {},
    // Mobile - imagen arriba, más alta
    "@media (max-width: 480px)": {
        borderRadius: "12px 12px 0 0",
    },
};
// -----------------------------
// CONTENT
// -----------------------------
export const contentWrapperSx = {
    display: "flex",
    flexDirection: "column",
    padding: "12px 2px 16px 16px",
    gap: "6px",
    // Tablet
    "@media (max-width: 768px)": {
        padding: "16px 12px 24px",
        height: "100%",
    },
    // Mobile
    "@media (max-width: 480px)": {
        padding: "8px 12px",
        gap: "4px",
    },
};
// -----------------------------
// Header
// -----------------------------
export const headerContainerSx = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    gap: "4px",
    width: "338px",
    // Tablet - ajustar ancho
    "@media (max-width: 768px)": {
        width: "100%",
    },
    // Mobile - full width
    "@media (max-width: 480px)": {
        width: "100%",
        maxWidth: "none",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "6px",
    },
};
export const characterNameSx = {
    lineHeight: 1.2,
    // Tablet
    "@media (max-width: 768px)": {
        lineHeight: 1.15,
    },
    // Mobile
    "@media (max-width: 480px)": {
        lineHeight: 1.2,
        fontSize: "16px",
    },
};
export const chipContainerSx = {
    // Mobile - No mostrar
    "@media (max-width: 480px)": {
        display: "none",
    },
};
export const speciesContainerSx = {
    flex: 1,
    marginTop: "-8px",
    // Tablet - ajustar ancho
    "@media (max-width: 768px)": {
        marginTop: "-5px",
    },
    // Mobile - mantener columnas
    "@media (max-width: 480px)": {
        flex: 0,
        marginTop: 0,
        lineHeight: 0,
    },
};
export const speciesTextSx = {
    color: colors.neutrals.neutral600,
    fontSize: "14px",
    "@media (max-width: 768px)": {},
    // Mobile - mantener columnas
    "@media (max-width: 480px)": {
        fontSize: "13px",
    },
};
// ---------------------------
// Bottom section
// ---------------------------
export const bottomSectionSx = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    // Tablet - cambiar a columnas
    "@media (max-width: 768px)": {
        gap: "16px",
    },
    // Mobile - mantener columnas
    "@media (max-width: 480px)": {
        display: "none",
    },
};
export const bottomItemSx = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
};
