import Artist from "../types/Artist";
import { apiClient } from "./ApiClient";

// Get all artists GET
export const getAllArtists = async () => {
    return await apiClient<Artist[]>('artists')
}

// Add artist POST
export const addNewArtist = async ( artistData: Omit<Artist, "_id"> ) => {
    return await apiClient<Artist>('artists', 'POST', artistData)
}
