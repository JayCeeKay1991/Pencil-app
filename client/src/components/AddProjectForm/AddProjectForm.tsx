import { ChangeEvent, SetStateAction, Dispatch, MouseEvent} from 'react'
import { postProject } from "../../ApiService";
import "./AddProjectForm.css";
import { useState } from "react";
// types
import Project from '../../types/Project';

interface AddProjectProps {
  formVisibility: boolean;
  setFormVisibilty: (arg: boolean) => void;
  setProjects: Dispatch<SetStateAction<Project[]>>;
}

export const AddProject = (props:  AddProjectProps ) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const [newThumbnail, setNewThumbnail] = useState("");

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value);
  }

  function handleChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    setNewDescription(e.target.value);
  }

  function handleChangeStartDate(e: ChangeEvent<HTMLInputElement> ) {
    setNewStartDate(e.target.value);
  }

  function handleChangeEndDate(e: ChangeEvent<HTMLInputElement>) {
    setNewEndDate(e.target.value);
  }

  function handleChangeThumbnail(e: ChangeEvent<HTMLInputElement>) {
    setNewThumbnail(e.target.value);
  }

  function hideForm() {
    if (props.formVisibility) {
      props.setFormVisibilty(false);
    } else {
      props.setFormVisibilty(true);
    }
  }

  async function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (
      newDescription &&
      newStartDate &&
      newEndDate &&
      newName &&
      newThumbnail
    ) {
      const newOwner = "user";
      const newProject: Partial<Project> = {
        projectOwner: newOwner,
        description: newDescription,
        projectName: newName,
        startDate: newStartDate,
        endDate: newEndDate,
        thumbImage: newThumbnail,
      };
      const savedProject = await postProject(newProject);
      props.setProjects((state) => [...state, savedProject]);

      setNewDescription("");
      setNewName("");
      setNewStartDate("");
      setNewEndDate("");
      setNewThumbnail("");
      hideForm();
    } else {
      alert("Please complete the form");
    }
  }

  return (
    <div className="form-wrapper">
      <form className="form">
        <button className="hide-form" onClick={hideForm}>
          x
        </button>
        <h1>Create new project</h1>

        <div>
          <label>ADD PROJECT NAME</label>
          <input
            value={newName}
            name="name"
            type="text"
            onChange={handleChangeName}
            placeholder="Write a project name.."
          ></input>
        </div>

        <div>
          <label>DESCRIPTION</label>
          <input
            value={newDescription}
            name="description"
            type="text"
            onChange={handleChangeDescription}
            placeholder="Add a description.."
          ></input>
        </div>

        <div className="dates">
          <section>
            <label> START DATE</label>
            <input
              className="date-input"
              value={newStartDate}
              name="startDate"
              type="datetime-local"
              onChange={handleChangeStartDate}
              placeholder="12/07/2019, 00:00:00"
            ></input>
          </section>
          <section>
            <label>END DATE</label>
            <input
              className="date-input"
              value={newEndDate}
              name="endDate"
              type="datetime-local"
              onChange={handleChangeEndDate}
              placeholder="12/07/2019, 00:00:00"
            ></input>
          </section>
        </div>

        <div>
          <label>THUMBNAIL</label>
          <input
            value={newThumbnail}
            name="thumbnail"
            type="text"
            onChange={handleChangeThumbnail}
            placeholder="Paste your link.."
          ></input>
        </div>

        <button className="create" type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
      <button className="bg-hide" onClick={hideForm}></button>
    </div>
  );
}
