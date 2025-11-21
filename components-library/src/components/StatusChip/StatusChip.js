import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useTranslation } from "react-i18next";
import { Chip } from "@mui/material";
import { AliveIcon, DeadIcon } from "@shared/icons";
import { chipSx } from "./StatusChips.styles";
/**
 * Normaliza el status del personaje para la traducción
 * Maneja diferentes variaciones del status (Vivo/Alive/alive, etc.)
 */
const normalizeStatus = (status) => {
    const statusLower = status.toLowerCase();
    if (statusLower === "alive" || statusLower === "vivo") {
        return "Alive";
    }
    if (statusLower === "dead" || statusLower === "muerto") {
        return "Dead";
    }
    // Para unknown, desconocido, o cualquier otro valor
    return "unknown";
};
export const StatusChip = ({ status }) => {
    const { t } = useTranslation();
    // Normalizar el status para obtener la clave de traducción correcta
    const statusKey = normalizeStatus(status);
    const translatedStatus = t(`characterCard.status.${statusKey}`);
    const icons = {
        Alive: _jsx(AliveIcon, {}),
        Dead: _jsx(DeadIcon, {}),
        unknown: undefined,
    };
    return (_jsx(Chip, { icon: icons[statusKey], label: translatedStatus, size: "small", sx: chipSx(statusKey), "aria-label": `Status: ${translatedStatus}` }));
};
export default React.memo(StatusChip);
