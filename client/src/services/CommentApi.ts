import Comment from "../types/Comment";
import { apiClient } from "./ApiClient";


// Get all comments GET
export const getComments = async ( projectId: string, artistId: string ) => {
  return await apiClient<Comment[]>(`projects/comments/${projectId}/${artistId}`)
}

// Post new comment POST
export const postComment = async ( projectId: string, artistId: string, newComment:Partial<Comment> ) => {
  return await apiClient<Comment>(`projects/comments/${projectId}/${artistId}`, 'POST', newComment)
}

