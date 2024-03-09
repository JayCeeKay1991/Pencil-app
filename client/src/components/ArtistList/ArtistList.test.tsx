import { ArtistList } from './ArtistList';
import { fireEvent, render, screen, userEvent } from '../../test/testSetup';
import { describe, it, expect } from 'vitest';
import {artists} from '../../test/testMocks';
import { SearchBar } from '../SearchBar/SearchBar';

vi.mock('../contextComponent', () => ({
  useMainContext: () => ({
    fullArtists: artists
  })
}));


describe('Artist list renders correctly', () => {
  it('the title is visible', () => {
    render(<ArtistList/>);
    const title = screen.queryByText('Collection');
    expect(title).toBeVisible();
  })

  it('should render the search bar', () => {
    render(<ArtistList/>);
    const searchBar = screen.queryByPlaceholderText(/search.../i);
    expect(searchBar).toBeVisible();
  })

  it('should select the people button by default', () => {
    render(<ArtistList/>);
    const peopleButton = screen.getByTestId('peopleButton');
    expect(peopleButton).toHaveClass("active");
  })
})

describe('User actions are processed correctly', async () => {
  const handleClick = vi.fn();
  const filterSearched = vi.fn();
  const filter = '';

  it('should handle click when filtering by skills', () => {
    render(
      <SearchBar
      filterSearched={filterSearched}
      filter={filter}
      setFilter={handleClick}
      />
    );
    const skillsButton = screen.getByTestId('skillsButton');
    fireEvent.click(skillsButton);
    expect(handleClick).toHaveBeenCalled();
    expect(skillsButton).toHaveClass('active');
    })

    it('should handle search input in the text field', async () => {
      render(
        <SearchBar
        filterSearched={filterSearched}
        filter={filter}
        setFilter={handleClick}
        />
      );
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'test');
      expect(filterSearched).toHaveBeenCalled();
    });

  })