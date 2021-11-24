import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './index';

test('renders the navBar ', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
