// Button.test.js

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// Imports a specific story for the test
import { Default } from './CheckoutForm.stories';

describe('components/CheckoutForm', () => {
  it('should render', () => {
    const { getByText } = render(<Default {...Default.args} onSubmit={() => 'noop'} />);
    const completePaymentButtonText = getByText('Complete Payment');
    expect(completePaymentButtonText).toBeTruthy();
  });
  it('should call on submit on send form', () => {
    const onSubmit = jest.fn();
    const { getByText, getByTestId } = render(<Default {...Default.args} onSubmit={onSubmit} />);
    const nameInput = getByTestId('name');
    const ccInput = getByTestId('cc');
    const ccExpiryInput = getByTestId('ccExpiry');
    const cvvInput = getByTestId('cvv');
    const addressInput = getByTestId('address');
    const countryInput = getByTestId('country');
    const zipInput = getByTestId('zip');

    fireEvent.change(nameInput, { target: { value: '123' } });
    fireEvent.change(ccInput, { target: { value: '123' } });
    fireEvent.change(ccExpiryInput, { target: { value: '123' } });
    fireEvent.change(cvvInput, { target: { value: '123' } });
    fireEvent.change(addressInput, { target: { value: '123' } });
    fireEvent.change(countryInput, { target: { value: '123' } });
    fireEvent.change(zipInput, { target: { value: '123' } });
    fireEvent.click(getByText('Complete Payment'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
