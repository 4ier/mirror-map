import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mirror map heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/mirror map/i);
  expect(headingElement).toBeInTheDocument();
});
