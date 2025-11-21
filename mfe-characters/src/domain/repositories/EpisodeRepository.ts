export interface EpisodeRepository {
  getEpisodeName(url: string): Promise<string>;
}
