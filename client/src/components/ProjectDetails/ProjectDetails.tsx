import { useState, useEffect, Dispatch, SetStateAction, FC } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailsItem } from "../ProjectDetailsItem/ProjectDetailsItem.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import "./ProjectDetails.css";
import { getLikes, fetchProjects } from "../../ApiService.js";
import { Loading } from "../Loading/Loading.js";
import ArtistLikes from "../../types/ArtistLikes.js";



export const ProjectDetails = (): React.JSX.Element => {
  const [likedArtists, setLikedArtists] = useState([]);
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const delay = setTimeout(async () => {
      try {
        const likes:ArtistLikes = await getLikes(id);
        setLikedArtists(likes);
        const projects = await fetchProjects();
        const projectTitle = projects.find((project) => project._id === id);
        setProjects(projectTitle);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
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
