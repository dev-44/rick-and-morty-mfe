import React, { useState } from "react";
import { Chip, Stack } from "@mui/material";
import { useCharacterFiltersStore } from "../state/characterFilters.store";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { useNavigate } from "react-router-dom";

type CharacterStatus = "alive" | "dead" | "unknown";

export const CharacterFilters: React.FC = () => {
  const { name, status, setName, setStatus, setPage } =
    useCharacterFiltersStore();

    const [localName, setLocalName] = useState(name);
    const navigate = useNavigate();

   const handleSearch = () => {
    if (!localName) return;
    setName(localName);
    setPage(1);      // Reiniciar paginación
  };

  const handleChipClick = (value?: CharacterStatus) => {
    setStatus(value);
    setPage(1);
  };

  return (
    <section style={{ marginBottom: "20px", width: "100%" }}>
      <HomeHeader search={localName} onSearchChange={setLocalName} handleSearch={handleSearch} />
      {/* Chips de filtrado por estado */}
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ marginTop: 2 }}>
        <Chip
          label="Todos"
          onClick={() => handleChipClick(undefined)}
          color={!status ? "primary" : "default"}
        />

        <Chip
          label="Vivo"
          onClick={() => handleChipClick("alive")}
          sx={[status === "alive" && {
            bgcolor: "#4CAF50",
            color: "white",
          }]} />

        <Chip
          label="Muerto"
          onClick={() => handleChipClick("dead")}
          sx={[status === "dead" && {
            bgcolor: "#F44336",
            color: "white",
          }]} />

        <Chip
          label="Desconocido"
          onClick={() => handleChipClick("unknown")}
          sx={[status === "unknown" && {
            bgcolor: "#9E9E9E",
            color: "white",
          }]} />

        <Chip
          label="Favoritos"
          onClick={() => navigate("/characters/favorites")}
          sx={{
            bgcolor: "#ffd54f",
            fontWeight: 600,
            "&:hover": { bgcolor: "#ffca28" },
          }}
        />
      </Stack>
    </section>
  );
};
