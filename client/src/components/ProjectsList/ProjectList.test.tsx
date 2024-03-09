import { ProjectList } from './ProjectList';
import { fireEvent, render, screen } from '../../test/testSetup';
import { describe, it, expect } from 'vitest';
import {projects} from '../../test/testMocks';
import { AddProject } from '../AddProjectForm/AddProjectForm';


vi.mock('../contextComponent', () => ({
  useMainContext: () => ({
    fullProjects: projects
  })
}));


describe('Project list renders correctly', () => {

  beforeEach(() => {
    render(<ProjectList/>)
  })

  it('the title is visible', () => {
    const title = screen.queryByText('Projects');
    expect(title).toBeVisible();
  })

  it('should render the add button', () => {
    const addButton = screen.queryByText('Add project');
    expect(addButton).toBeVisible();
  })

  it('should render the filter dropdown', () => {
    const dropdown = screen.queryByText('Filter');
    expect(dropdown).toBeVisible();
  })

})

describe('User actions are processed correctly', () => {
  const setFormVisibility= vi.fn();
  const setProjects = vi.fn();
  const formVisibility = false;

  it('should handle click on Add-Project button', () => {
    render(
      <AddProject
        formVisibility={formVisibility}
        setFormVisibility={setFormVisibility}
        setProjects={setProjects}
      />
    );
    const addButton = screen.queryByText('Add project') as HTMLButtonElement | null;
    if (addButton) {
      fireEvent.click(addButton);
      expect(setFormVisibility).toHaveBeenCalledWith(true);
      expect(setProjects).toHaveBeenCalled();    }
    })
  })
