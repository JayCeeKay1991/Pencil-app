import ArtistLikes from "../types/ArtistLikes";
import { apiClient } from "./ApiClient";


// Get one projects artist likes GET
export const getLikes = async ( projectId: string ) => {
  return await apiClient<ArtistLikes>(`projects/artistLikes/${projectId}`)
}

// update artist likes PUT
export const updateLikes = async ( artistId: string ) => {
  return await apiClient<ArtistLikes>(`projects/artistLikes/like/${artistId}`)
}

// update artist dislikes PUT
export const updateDislikes = async ( artistId: string ) => {
  return await apiClient<ArtistLikes>(`projects/artistLikes/dislike/${artistId}`)
}

