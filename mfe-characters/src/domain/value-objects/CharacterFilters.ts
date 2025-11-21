export interface CharacterFilters {
  page: number;
  name?: string;
  status?: "alive" | "dead" | "unknown";
}
