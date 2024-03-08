import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArtistListItem } from '../ArtistListItem/ArtistListItem';
import { PageTitle } from '../PageTitle/pageTitle';
import { SearchBar } from '../SearchBar/SearchBar';
import { artist, project } from '../../testMocks';


describe('Artist list item', () => {
  it('renders a list of artists', () => {
    render(<ArtistListItem artist={artist} />);
  })
  it('renders the page title', () => {
    render(<PageTitle/>);
  })
  it('renders the page title', () => {
    render(<SearchBar/>);
  })
})