import Project from "../types/Project";
import { apiClient } from "./ApiClient";


// Get all projects GET
export const getAllProjects =  async () => {
    return await apiClient<Project[]>('projects')
}

// Get one project GET
export const getProject = async ( projectId: number ) => {
    return apiClient<Project>(`projects/${projectId}`)
}

// Add new projects POST
export const addNewProject = async ( projectData: Omit<Project, "id">) => {
    return await apiClient<Project>('projects', 'POST', projectData)
}

// Add new artist to existing project PUT
export const addArtistToProject = async ( artistId: number, projectId: number ) => {
    return await apiClient<Project>(`projects/${projectId}/${artistId}`, 'PUT')
}



