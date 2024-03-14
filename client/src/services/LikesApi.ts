import LikeDislike from "../types/LikeDislike";
import { apiClient } from "./ApiClient";


// Get one projects artist likes GET
export const getLikes = async ( projectId: number, artistId: number ) => {
  return await apiClient<LikeDislike>(`likes/${projectId}/${artistId}`)
}

// Get one projects artist dislikes GET
export const getDislikes = async ( projectId: number, artistId: number ) => {
  return await apiClient<LikeDislike>(`likes/${projectId}/${artistId}`)
}

// Add like POST
export const addLike = async ( projectId: number, artistId: number, userId: number ) => {
  return await apiClient<LikeDislike>(`likes/${projectId}/${artistId}`, 'POST', userId)
}

// Add dislike POST
export const addDislike = async ( projectId: number, artistId: number ) => {
  return await apiClient<LikeDislike>(`dislikes/${projectId}/${artistId}`, 'POST')
}

