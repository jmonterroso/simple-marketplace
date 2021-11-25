// Button.test.js

import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './NavBar.stories';
import { mockProps } from './constants';

describe('components/NavBar', () => {
  it('should render', () => {
    const { getByText } = render(<Default {...Default.args} {...mockProps} />);
    const navigation = getByText('NavBar');
    const login = getByText('Login');
    expect(navigation).toBeTruthy();
    expect(login).toBeTruthy();
  });
});
