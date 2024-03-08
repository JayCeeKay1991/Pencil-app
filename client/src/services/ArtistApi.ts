import Artist from "../types/Artist";
import { apiClient } from "./ApiClient";

// Get all artists
export const getAllArtists = async () => {
    return await apiClient<Artist[]>('/artists')
}
