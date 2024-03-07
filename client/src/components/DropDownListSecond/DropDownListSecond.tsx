import { useState, useEffect, FC } from "react";
import "./DropDownListSecond.css";
import { fetchProjects } from "../../ApiService.js";
import Project from "../../types/Project.js";

interface DropDownListProps {
  onSelectProject: (id: string) => void;
}


export const DropDownListSecond = (props: DropDownListProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>("");

  useEffect(() => {
    async function fetchAndSet() {
      const data = await fetchProjects();
      setProjects(data);
    }
    fetchAndSet();
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle click
  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    props.onSelectProject(projectId);
    setIsDropdownOpen(false);
  };

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
                  <li key={i} onClick={() => handleProjectSelect(project._id)}>
                    <a>{project.projectName}</a>
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
