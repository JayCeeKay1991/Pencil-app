import Artist from "../types/Artist";
import { apiClient } from "./ApiClient";

// Get all artists GET
export const getAllArtists = async () => {
    return await apiClient<Artist[]>('artists')
}

// Get artists selected for a project GET
export const getArtistsByProject = async (projectId:number) => {
    return await apiClient<Artist[]>(`artists/${projectId}`, 'GET')
}

// Add artist POST
export const addNewArtist = async ( artistData: Omit<Artist, "_id"> ) => {
    return await apiClient<Artist>('artists', 'POST', artistData)
}
