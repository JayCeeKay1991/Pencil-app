import Comment from "../types/Comment";
import { apiClient } from "./ApiClient";


// Get all comments GET
export const getComments = async ( projectId: number, artistId: number ) => {
  return await apiClient<Comment[]>(`projects/comments/${projectId}/${artistId}`)
}

// Post new comment POST
export const addComment = async ( projectId: number, artistId: number, newComment:Partial<Comment> ) => {
  return await apiClient<Comment>(`projects/comments/${projectId}/${artistId}`, 'POST', newComment)
}

