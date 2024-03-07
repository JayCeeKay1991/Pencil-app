import { useState, useEffect } from "react";
import { useMainContext } from "../contextComponent.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import { ProjectListItem } from "../ProjectListItem/ProjectListItem.js";
import { AddProject } from "../AddProjectForm/AddProjectForm.js";
import "./ProjectList.css";
import { Loading } from "../Loading/Loading.js";

export function ProjectList() {
  const { fullProjects, setFullProjects } = useMainContext();
  const [projects, setProjects] = useState([]);
  const [formVisibilty, setFormVisibilty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const delay = setTimeout(() => {
      const alphabetSort = fullProjects.sort((a, b) =>
        a.projectName > b.projectName ? 1 : -1
      );
      setProjects(alphabetSort);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(delay);
  }, [fullProjects]);

  // Toggle form visibility
  const showForm = () => {
    if (!formVisibilty) {
      setFormVisibilty(true);
    }
  };


  // Sort array
  function sortProjects(event) {
    const value = event.target.value;
    if (value === "start") {
      projects.sort((a, b) => a.startDate.localeCompare(b.startDate));
    } else if (value === "end") {
      projects.sort((a, b) => a.endDate.localeCompare(b.endDate));
    } else if (value === "reset") {
      projects.sort((a, b) => (a.projectName > b.projectName ? 1 : -1));
    }
    setProjects([...projects]);
  }

  return (
    <div className="wrapper">
      <PageTitle page="Projects" />
      {formVisibilty ? (
        <AddProject
          formVisibilty={formVisibilty}
          setFormVisibilty={setFormVisibilty}
          setProjects={setProjects}
        />
      ) : null}

      <div className="filter-addproject">
        <select name="filters" className="selected" onChange={sortProjects}>
          <option value="reset">Filter</option>
          <option value="start">Start date</option>
          <option value="end">End date</option>
        </select>

        <button className="add-project" onClick={showForm}>
          Add project
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="list projects-thumbs">
          {projects.map((project, i) => {
            return <ProjectListItem key={i} project={project} />;
          })}
        </ul>
      )}
    </div>
  );
}
