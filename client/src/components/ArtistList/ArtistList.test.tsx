import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArtistList } from './ArtistList';
import { artists } from '../../test/testMocks';


vi.mock('../contextComponent', () => ({
  useMainContext: () => ({
    fullArtists: artists
  })
}));

describe('Artist list', () => {
  it('should display artists', async () => {
    render(<ArtistList/>);
    const image = screen.getByText(artists[0].profileImg)
    expect(image).toBeVisible();
  });
})