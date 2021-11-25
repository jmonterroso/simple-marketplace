// Button.test.js

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './Product.stories';

describe('components/ProductListItem', () => {
  // it('should render', () => {
  //   const { getByTestId } = render(<Default {...Default.args} />);
  //   const navigation = getByTestId('main-navigation');
  //   expect(navigation).toBeTruthy();
  // });
  // it('validates Login/Create Account buttons are rendered', () => {
  //   const { getByText } = render(<Default {...Default.args} />);
  //   const loginButton = getByText('Sign In');
  //   const createAccountButton = getByText('Create Account');
  //   expect(loginButton).toBeTruthy();
  //   expect(createAccountButton).toBeTruthy();
  // });
  // it('validates Hamburger menu is displayed on click the hamburger button', async () => {
  //   const { getByTestId } = render(<Default {...Default.args} />);
  //   const hamburgerBtn = getByTestId('hamburger-btn');
  //   expect(hamburgerBtn).toBeTruthy();
  //   fireEvent.click(hamburgerBtn);
  //   expect(getByTestId('hamburger-menu')).toBeTruthy();
  // });
});
