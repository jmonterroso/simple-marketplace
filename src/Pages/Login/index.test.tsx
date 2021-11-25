// Button.test.js

import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './Login.stories';

describe('components/Login', () => {
  it('should render', () => {
    const { queryAllByText } = render(<Default {...Default.args} />);
    const loginTitle = queryAllByText('Login');
    expect(loginTitle.length).toBe(2);
  });
});
