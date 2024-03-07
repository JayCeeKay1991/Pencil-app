import React, { useState, useEffect } from "react";
import "./DropDownListSecond.css";
import { fetchProjects } from "../../ApiService.js";

export function DropDownListSecond ({ onSelectProject }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    onSelectProject(projectId);
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
