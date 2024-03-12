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

// Add like PUT
export const addLike = async ( projectId: number, artistId: number ) => {
  return await apiClient<LikeDislike>(`likes/${projectId}/${artistId}`, 'PUT')
}

// Add dislike PUT
export const addDislike = async ( projectId: number, artistId: number ) => {
  return await apiClient<LikeDislike>(`dislikes/${projectId}/${artistId}`, 'PUT')
}

