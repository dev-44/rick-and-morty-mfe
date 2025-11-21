import type { EpisodeRepository } from "../../domain/repositories/EpisodeRepository";
import { fetchEpisodeName } from "../http/fetchEpisode";

export class HttpEpisodeRepository implements EpisodeRepository {
  async getEpisodeName(url: string): Promise<string> {
    return fetchEpisodeName(url);
  }
}
