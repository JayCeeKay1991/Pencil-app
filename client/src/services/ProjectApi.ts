import Artist from "../types/Artist";
import Project from "../types/Project";
import { apiClient } from "./ApiClient";


// Get all projects
export const getAllProjects =  async () => {
    return await apiClient<Project[]>('/projects')
}

// Add new artist
export const addArtistToProject = async ( artistData: Omit<Artist, "_id">) => {
    return await apiClient<Project>(`/projects`, 'PUT', artistData)
}

// Add new projects
export const addNewProject = async ( projectData: Omit<Project, "_id">) => {
    return await apiClient<Project>('/projects', 'POST', projectData)
}

