import { useState, useEffect, ChangeEvent } from "react";
import { useMainContext } from "../contextComponent.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import { ProjectListItem } from "../ProjectListItem/ProjectListItem.js";
import { AddProject } from "../AddProjectForm/AddProjectForm.js";
import "./ProjectList.css";
import { Loading } from "../Loading/Loading.js";
import Project from "../../types/Project.js";

export function ProjectList() {
  const { fullProjects } = useMainContext();
  const [projects, setProjects] = useState<Project[]>([]);
  const [formVisibility, setFormVisibility] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const delay = setTimeout(() => {
      const alphabetSort = fullProjects.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setProjects(alphabetSort);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(delay);
  }, [fullProjects]);

  // Toggle form visibility
  const showForm = () => {
    if (!formVisibility) {
      setFormVisibility(true);
    }
  };


  // Sort array
  function sortProjects(event: ChangeEvent<HTMLSelectElement>) {
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
      {formVisibility ? (
        <AddProject
          formVisibility={formVisibility}
          setFormVisibility={setFormVisibility}
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
        <ul className="list projects-thumbs" data-testid="projects-thumbs" >
          {projects.map((project, i) => {
            return <ProjectListItem key={i} project={project} />;
          })}
        </ul>
      )}
    </div>
  );
}
