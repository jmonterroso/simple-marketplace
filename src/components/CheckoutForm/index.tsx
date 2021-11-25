import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import * as Style from './style';

export interface ICheckout {
  email: string;
  password: string;
  name: string;
  cc: string;
  ccExpiry: string;
  address: string;
  zip: string;
  country: string;
  cvv: string;
}

export interface Props {
  onSubmit: (fields: ICheckout) => void;
}

const CheckoutForm: React.FC<Props> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<ICheckout>({
    email: '',
    password: '',
    name: '',
    cc: '',
    ccExpiry: '',
    cvv: '',

    address: '',
    zip: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formState);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Style.Wrapper>
      <Box sx={{ flexGrow: 1 }} component={'form'} onSubmit={handleSubmit}>
        <Grid container direction={'column'} spacing={5} pr={4}>
          <Grid item>
            <TextField
              inputProps={{
                'data-testid': 'name',
              }}
              type={'name'}
              fullWidth
              name={'name'}
              label={'Name'}
              required
              variant={'outlined'}
              value={formState.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              inputProps={{
                'data-testid': 'cc',
              }}
              type={'text'}
              fullWidth
              required
              name={'cc'}
              label={'Credit Card'}
              variant={'outlined'}
              value={formState.cc}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              type={'text'}
              inputProps={{
                'data-testid': 'ccExpiry',
              }}
              name={'ccExpiry'}
              required
              label={'Expiry Date'}
              variant={'outlined'}
              value={formState.ccExpiry}
              onChange={handleChange}
              sx={{ width: 'calc(50% - 5px)', marginRight: '10px' }}
            />
            <TextField
              type={'text'}
              inputProps={{
                'data-testid': 'cvv',
              }}
              name={'cvv'}
              label={'CVV'}
              required
              variant={'outlined'}
              value={formState.cvv}
              onChange={handleChange}
              sx={{ width: 'calc(50% - 5px)' }}
            />
          </Grid>
          <Grid item>
            <Typography variant={'h6'}>
              <b>Shipping Address</b>
            </Typography>
          </Grid>{' '}
          <Grid item>
            <TextField
              type={'text'}
              inputProps={{
                'data-testid': 'address',
              }}
              name={'address'}
              required
              label={'Address'}
              variant={'outlined'}
              fullWidth
              value={formState.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              type={'text'}
              inputProps={{
                'data-testid': 'country',
              }}
              name={'country'}
              label={'Country'}
              required
              variant={'outlined'}
              fullWidth
              value={formState.country}
              onChange={handleChange}
              sx={{ width: 'calc(50% - 5px)', marginRight: '10px' }}
            />
            <TextField
              type={'text'}
              name={'zip'}
              inputProps={{
                'data-testid': 'zip',
              }}
              label={'Zip Code'}
              required
              variant={'outlined'}
              fullWidth
              value={formState.zip}
              onChange={handleChange}
              sx={{ width: 'calc(50% - 5px)' }}
            />
          </Grid>
          <Grid item>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Complete Payment
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Style.Wrapper>
  );
};

export default CheckoutForm;
