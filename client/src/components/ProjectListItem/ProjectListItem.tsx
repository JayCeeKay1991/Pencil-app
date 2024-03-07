import "./ProjectListItem.css";
import { Link } from "react-router-dom";

export function ProjectListItem({ project }) {

  //  const artistsAdded = project.artists
  // const numArtists = artistsAdded.length;


  return (
    <div className="projectThumbWrap">
      <Link to={`/projectDetails/${project._id}`}>
        <div className="projectThumb">
          <img src={project.thumbImage} className="project-thumb-img"></img>
        </div>
      </Link>
      <div>
        <h3>{project.projectName}</h3>
        {/* <p>{project.artists.length} Artists</p> */}
        <p>
          {project.artists && project.artists.length
            ? `${project.artists.length} Artists`
            : "0 Artists"}
        </p>

        {/* <p>{project.endDate}</p> */}
      </div>
    </div>
  );
}
