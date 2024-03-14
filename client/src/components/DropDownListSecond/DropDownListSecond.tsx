import { useState, useEffect } from "react";
import "./DropDownListSecond.css";
import Project from "../../types/Project.js";
import { getAllProjects } from "../../services/ProjectApi";
import { addArtistToProject } from "../../services/ProjectApi";


interface DropDownListSecondProps {
  artistId: number;
}

export const DropDownListSecond = ({artistId} : DropDownListSecondProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchAndSet() {
      const projects = await getAllProjects()
      setProjects(projects);
    }
    fetchAndSet();
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Add artist
  async function handleClick(projectId: number) {
     await addArtistToProject(artistId, projectId);
     setIsDropdownOpen(false)
   }

 

  return (
    <div className="dropdownSecond">
      <button onClick={toggleDropdown}>Add to project</button>
      {isDropdownOpen ? (
        <>
          <div className="dropdown-content-second">
            <h4>Your projects</h4>
            <ul>
              {projects.map((project, i) => {
                return (
                  <li key={i} onClick={() => handleClick(project.id)}>
                    <a>{project.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}
