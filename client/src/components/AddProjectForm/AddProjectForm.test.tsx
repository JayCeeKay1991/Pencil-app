import { AddProject } from './AddProjectForm';
import { render, screen, userEvent } from '../../test/testSetup';
import { describe, it, expect } from 'vitest';
import { projects } from '../../test/testMocks';

vi.mock('../contextComponent', () => ({
  useMainContext: () => ({})
}));

describe('User inputs are calling change handlers', async () => {
  let nameInput: HTMLInputElement;
  const onSubmit = vi.fn();
  const setFormVisibility = vi.fn();
  const setProjects = vi.fn();

  beforeEach(() => {
    render(
      <AddProject
        onSubmit={onSubmit}
        formVisibility={true}
        setFormVisibility={setFormVisibility}
        setProjects={setProjects}
      />
      );
      nameInput = screen.getByTestId('input-project-name') as HTMLInputElement;
    })
  // const descrInput = screen.getByTestId('input-project-descr');
  // const startInput = screen.getByTestId('input-start');
  // const endInput = screen.getByTestId('input-end');
  // const thumbnail = screen.getByTestId('input-thumbnail');
  // const submit = screen.getByTestId('submit-new-project');

  it('should handle changes when filling in form', async () => {
    await userEvent.type(nameInput, projects[0].projectName);
    expect(nameInput.value).toBe(projects[0].projectName);
  })

  // it('submits the form with the entered data', async () => {
  //   // Simulate filling out and submitting the form
  //   await userEvent.type(nameInput, 'Project title');
  //   await userEvent.type(descrInput, 'Project description');
  //   await userEvent.type(startInput, '2024-01-01T12:00');
  //   await userEvent.type(endInput, '2024-01-02T12:00');
  //   await userEvent.type(thumbnail, 'http://url.com');
  //   userEvent.click(submit);
  //   // Verify the onSubmit handler was called with the correct data
  //   expect(onSubmit).toHaveBeenCalled();
  // });


  })