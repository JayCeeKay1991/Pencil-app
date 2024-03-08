import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArtistList } from './ArtistList';

describe('Artist list', () => {
  it('renders a list of artists', () => {
    render(<ArtistList/>);
  })

  it('renders the correct number of artists', () => {

  })
})