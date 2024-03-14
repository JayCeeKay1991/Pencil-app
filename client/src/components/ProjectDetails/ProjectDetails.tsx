import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailsItem } from "../ProjectDetailsItem/ProjectDetailsItem.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import "./ProjectDetails.css";
import { getProject } from "../../services/ProjectApi.js";
import { Loading } from "../Loading/Loading.js";
import Project from "../../types/Project.js";
import Artist from "../../types/Artist.js";

const initialProjectState =  {
  id: 0,
  projectName: "",
  projectOwner: "",
  description: "",
  startDate: Date.now(),
  endDate: Date.now(),
  thumbImage: "",
  artists: []
}

export const ProjectDetails = (): React.JSX.Element => {
  const [projectArtists, setProjectArtists] = useState<Artist[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const delay = setTimeout(async () => {
      try {
        const project = await getProject(parseInt(id!))
        setProject(project)
        setProjectArtists(project.artists)
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
          <PageTitle page={project!.name} />

          <div className="titles">
            <p>CHOSEN ARTISTS</p>
            <p>RATE</p>
            <p>VOTES & COMMENTS</p>
          </div>

          <ul className="project-details-List">
            {projectArtists && projectArtists.length ? projectArtists.map((artist, i) => {
              return <ProjectDetailsItem key={i} artist={artist} project={project!}/>;
            }): 'No artists'}
          </ul>
        </>
      )}
    </div>
  );
}
