import LikeDislike from "../types/LikeDislike";
import { apiClient } from "./ApiClient";


// Get one projects artist likes GET
export const getLikes = async ( projectId: number, artistId: number ) => {
  return await apiClient<LikeDislike[]>(`likes/${projectId}/${artistId}`)
}

// Get one projects artist dislikes GET
export const getDislikes = async ( projectId: number, artistId: number ) => {
  return await apiClient<LikeDislike[]>(`dislikes/${projectId}/${artistId}`)
}

// Add like POST
export const addLike = async ( projectId: number, artistId: number, userId: number ) => {
  const body = {
   userId:  userId.toString()
  }
  return await apiClient<LikeDislike>(`likes/${projectId}/${artistId}`, 'POST', body )
}

// Add dislike POST
export const addDislike = async ( projectId: number, artistId: number, userId: number ) => {
  const body = {
   userId:  userId.toString()
  }
  return await apiClient<LikeDislike>(`dislikes/${projectId}/${artistId}`, 'POST', body )
}

