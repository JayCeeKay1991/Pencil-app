import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailsItem } from "../ProjectDetailsItem/ProjectDetailsItem.jsx";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import "./ProjectDetails.css";
import { getLikes, fetchProjects } from "../../ApiService.js";
import { Loading } from "../Loading/Loading.jsx";

export function ProjectDetails() {
  const [likedArtists, setLikedArtists] = useState([]);
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const delay = setTimeout(async () => {
      try {
        const likes = await getLikes(id);
        setLikedArtists(likes);

        const projects = await fetchProjects();
        const projectTitle = projects.find((project) => project._id === id);
        setProjects(projectTitle);

        // Set isLoading to false after data is fetched
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Handle error by setting isLoading to false
      }
    }, 600);

    return () => clearTimeout(delay);
  }, [id]);


  return (
    <div className="wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
