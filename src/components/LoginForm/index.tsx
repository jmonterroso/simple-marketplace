import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import * as Style from './style';

export interface ILogin {
  email: string;
  password: string;
}

export interface Props {
  onSubmit: (fields: ILogin) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<ILogin>({
    email: '',
    password: '',
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
        <Grid container direction={'column'} spacing={5}>
          <Grid item>
            <TextField
              type={'email'}
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              type="password"
              fullWidth
              id="password"
              name="password"
              label="Password"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Style.Wrapper>
  );
};

export default LoginForm;
