import App from './App'
import { render, screen } from './test/testSetup'
import { describe, it, expect } from 'vitest';

vi.mock('../contextComponent', () => ({
  useMainContext: () => ({})
}));

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    const title = screen.queryByText(/Collection/i);
    expect(title).toBeVisible();
  })


})