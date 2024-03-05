import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailsItem } from "../ProjectDetailsItem/ProjectDetailsItem.jsx";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import "./ProjectDetails.css";
import { getLikes, fetchProjects } from "../../ApiService.js";


export function ProjectDetails() {
  const [likedArtists, setLikedArtists] = useState([]);
  const [projects, setProjects] = useState([])
  const { id } = useParams();

  useEffect(() => {
    async function fetchAndSet() {
      const likes = await getLikes(id);
      setLikedArtists(likes);
      const projects = await fetchProjects();
     const projectTitle = projects.find((project) => project._id === id);
      setProjects(projectTitle);
    }
    fetchAndSet();
  }, []);

  return (
    <div className="wrapper">
      <PageTitle page={projects.projectName} />

      <div className="titles">
        <p>CHOSEN ARTISTS</p>
        <p>RATE</p>
        <p>VOTES</p>
      </div>

      <ul className="project-details-List">
        {likedArtists.map((artist, i) => {
          return <ProjectDetailsItem key={i} artist={artist} />;
        })}
      </ul>
    </div>
  );
}
