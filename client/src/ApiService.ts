const artistsUrl = "http://localhost:3000/artists";
const projectsUrl = "http://localhost:3000/projects";

//Get artists
export async function fetchArtists() {
  try {
    const response = await fetch(artistsUrl);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

//Get projects
export async function fetchProjects() {
  try {
    const response = await fetch(projectsUrl);
    const jsonData = await response.json();
    // console.log({ jsonData });
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

//Add artist to list
export async function addArtist(obj, projectId) {
  try {
    await fetch(projectsUrl + "/" + projectId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    // console.log(JSON.stringify(obj));
  } catch (error) {
    console.error(error);
  }
}

//Post data
export async function postProject(project) {
  try {
    await fetch(projectsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    // setNewevent("");
    // fetchData();
  } catch (error) {
    console.error(error);
  }
}

// Get likes
export async function getLikes(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/projects/artistLikes/${id}`
    );
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Update likes
export async function updateLikes(id) {
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
export async function updateDislikes(id) {
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
