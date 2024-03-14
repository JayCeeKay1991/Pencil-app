import { useState, useEffect} from "react";
import "./DropDownList.css";
import { getAllProjects } from "../../services/ProjectApi";
import Project from "../../types/Project";

interface DropDownListProps {
  onSelectProject: (id: number) => void;
}

export const DropDownList = ({onSelectProject} : DropDownListProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<number>(0);

  useEffect(() => {
    async function fetchAndSet() {
      const projects = await getAllProjects();
      setProjects(projects);
    }
    fetchAndSet();
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle click
  const handleProjectSelect = (projectId: number) => {
    setSelectedProject(projectId);
    onSelectProject(projectId);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Add</button>
      {isDropdownOpen ? (
        <>
          <div className="dropdown-content">
            <h4>Your projects</h4>
            <ul>
              {projects.map((project, i) => {
                return (
                  <li key={i} onClick={() => handleProjectSelect(project.id)}>
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
