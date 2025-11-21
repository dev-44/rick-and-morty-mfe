import React from "react";
import { useTranslation } from "react-i18next";
import { Chip } from "@mui/material";
import { AliveIcon, DeadIcon } from "@shared/icons";
import { chipSx } from "./StatusChips.styles";
import { StatusChipProps } from "./StatusChip.types";

/**
 * Normaliza el status del personaje para la traducción
 * Maneja diferentes variaciones del status (Vivo/Alive/alive, etc.)
 */
const normalizeStatus = (status: string) => {
  const statusLower = status.toLowerCase();

  if (statusLower === "alive" || statusLower === "vivo") {
    return "alive";
  }
  if (statusLower === "dead" || statusLower === "muerto") {
    return "dead";
  }
  // Para unknown, desconocido, o cualquier otro valor
  return "unknown";
};

export const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  const { t } = useTranslation();
  // Normalizar el status para obtener la clave de traducción correcta
  const statusKey = normalizeStatus(status);
  const translatedStatus = t(`characterCard.status.${statusKey}`);

  const icons: Record<"alive" | "dead" | "unknown", React.ReactElement | undefined> = {
    alive: <AliveIcon />,
    dead: <DeadIcon />,
    unknown: undefined,
  };

  return (
    <Chip
      icon={icons[statusKey]}
      label={translatedStatus}
      size="small"
      sx={chipSx(statusKey)}
      aria-label={`Status: ${translatedStatus}`}
    />
  );
};

export default React.memo(StatusChip);
