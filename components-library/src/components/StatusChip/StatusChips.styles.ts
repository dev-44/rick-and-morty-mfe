import { colors } from "@/shared/theme";
import type { SxProps, Theme } from "@mui/material/styles";

export const chipSx = (status: string): SxProps<Theme> => ({
  backgroundColor:
    status === "alive" || status === "vivo"
      ? colors.primary.cta100
      : status === "dead"
      ? colors.neutrals.neutral100
      : "#F3F3F3",
  color:
    status === "alive"
      ? colors.primary.cta900
      : status === "dead"
      ? colors.neutrals.neutral800
      : "#757575",
  fontWeight: 600,
  borderRadius: "16px",
  paddingX: "6px",
  ".MuiChip-icon": {
    marginLeft: "4px",
  },
});
