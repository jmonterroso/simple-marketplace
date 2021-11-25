// Button.test.js

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './LoginForm.stories';

describe('components/LoginForm', () => {
  it('should render', () => {
    const { getByText } = render(<Default {...Default.args} onSubmit={() => 'noop'} />);
    const loginBtn = getByText('Login');
    expect(loginBtn).toBeTruthy();
  });
  it('should call on submit on send form', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<Default {...Default.args} onSubmit={onSubmit} />);
    const email = getByTestId('email');
    const password = getByTestId('password');
    fireEvent.change(email, { target: { value: 'admin@admin.com' } });
    fireEvent.change(password, { target: { value: 'admin' } });
    fireEvent.click(getByTestId('login-btn'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
