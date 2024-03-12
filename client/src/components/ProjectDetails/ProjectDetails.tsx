import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailsItem } from "../ProjectDetailsItem/ProjectDetailsItem.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import "./ProjectDetails.css";
import { getAllProjects } from "../../services/ProjectApi.js";
import { getLikes } from "../../services/LikesApi.js";
import { Loading } from "../Loading/Loading.js";
import Project from "../../types/Project.js";
import Artist from "../../types/Artist.js";

const initialProjectState =  {
  _id: "",
  projectName: "",
  projectOwner: "",
  description: "",
  startDate: "",
  endDate: "",
  thumbImage: "",
  artists: []
}

export const ProjectDetails = (): React.JSX.Element => {
  const [likedArtists, setLikedArtists] = useState<Artist[]>([]);
  const [projects, setProjects] = useState<Project>(initialProjectState)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const delay = setTimeout(async () => {
      try {
        const likes = await getLikes(id!);
        setLikedArtists(likes);
        const projects:Project[] = await getAllProjects();
        const projectTitle = projects.find((project:Project) => project._id === id);
        if (projectTitle) {
          setProjects(projectTitle);
        }
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
          <PageTitle page={projects?.projectName || 'No project.'} />

          <div className="titles">
            <p>CHOSEN ARTISTS</p>
            <p>RATE</p>
            <p>VOTES & COMMENTS</p>
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
