import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArtistList } from './ArtistList';
import { artists } from '../../testMocks';


vi.mock('../contextComponent', () => ({
  useMainContext: () => ({
    fullArtists: artists
  })
}));

describe('Artist list', () => {
  it('should display artists after loading', async () => {
    render(<ArtistList/>);
    expect(screen.getByText(artists[0].name)).toBeInTheDocument();
  });
})