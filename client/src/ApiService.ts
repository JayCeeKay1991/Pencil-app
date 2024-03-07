import Artist from './types/Artist';
import Project from './types/Project';
import ArtistLikes from './types/ArtistLikes';

const artistsUrl = "http://localhost:3000/artists";
const projectsUrl = "http://localhost:3000/projects";


//Get artists
export async function fetchArtists() {
  try {
    const response = await fetch(artistsUrl);
    const jsonData:Artist = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

//Get projects
export async function fetchProjects() {
  try {
    const response = await fetch(projectsUrl);
    const jsonData:Project[] = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

//Add artist to list
export async function addArtist(obj:Artist, projectId:string) {
  try {
    const response = await fetch(projectsUrl + "/" + projectId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const newArtist: Artist = await response.json();
    return newArtist;
  } catch (error) {
    console.error(error);
  }
}

//Post data
export async function postProject(project:Project) {
  try {
    const response = await fetch(projectsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    const newProject: Project = await response.json();
    return newProject;

  } catch (error) {
    console.error(error);
  }
}

// Get likes
export async function getLikes(id:string) {
  try {
    const response = await fetch(
      `http://localhost:3000/projects/artistLikes/${id}`
    );
    const data:ArtistLikes = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Update likes
export async function updateLikes(id:string) {
  try {
    await fetch(`http://localhost:3000/projects/artistLikes/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}

// Update Dislikes
export async function updateDislikes(id:string) {
  try {
    await fetch(`http://localhost:3000/projects/artistLikes/dislike/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}
