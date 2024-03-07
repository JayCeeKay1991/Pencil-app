import { useState, useEffect} from "react";
import "./DropDownList.css";
import { fetchProjects } from "../../ApiService";
import Project from "../../types/Project";

interface DropDownListProps {
  onSelectProject: (id: string) => void;
}

export const DropDownList = (props: DropDownListProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>("");

  useEffect(() => {
    async function fetchAndSet() {
      const data = await fetchProjects();
      setProjects(data);
    }
    fetchAndSet();
  }, []);git 

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
    <div className="dropdown">
      <button onClick={toggleDropdown}>Add</button>
      {isDropdownOpen ? (
        <>
          <div className="dropdown-content">
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
