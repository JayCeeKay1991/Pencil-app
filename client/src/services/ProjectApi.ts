import Artist from "../types/Artist";
import Project from "../types/Project";
import { apiClient } from "./ApiClient";


// Get all projects GET
export const getAllProjects =  async () => {
    return await apiClient<Project[]>('projects')
}

// Add new projects POST
export const addNewProject = async ( projectData: Omit<Project, "id">) => {
    return await apiClient<Project>('projects', 'POST', projectData)
}

// Add new artist to existing project PUT
export const addArtistToProject = async ( artistData: Omit<Artist, "id">, projectId: number ) => {
    return await apiClient<Project>(`projects/${projectId}`, 'PUT', artistData)
}



