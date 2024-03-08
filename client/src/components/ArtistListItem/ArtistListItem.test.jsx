import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArtistListItem } from '../ArtistListItem/ArtistListItem';
import { artist, project } from '../../testMocks';


describe('Artist list item', () => {
  it('renders a list of artists', () => {
    render(<ArtistListItem artist={artist} />);
    expect(screen.getByText(artists[0].name)).toBeInTheDocument();
  })
})