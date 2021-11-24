import React, { useState } from 'react';
import * as Style from './style';
import LoginForm, { ILogin } from '../../components/LoginForm';
import { Alert, Box, CircularProgress, Grid, Snackbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginPost } from '../../api';

export interface Props {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Login: React.FC<Props> = ({ children }) => {
  const [formState, setFormState] = useState({
    loading: false,
    invalid: false,
  });
  const navigate = useNavigate();
  const onSubmit = async (value: ILogin) => {
    setFormState({
      ...formState,
      loading: true,
    });
    const data = await loginPost(value);
    if (data.error) {
      setFormState({
        ...formState,
        invalid: true,
        loading: false,
      });
    } else {
      setFormState({
        ...formState,
        loading: false,
        invalid: false,
      });
      navigate('/', { replace: true });
    }
  };
  return (
    <Style.Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className={'login-container'} justifyContent={'center'} alignItems={'center'}>
          {formState.loading ? (
            <Grid item lg={4} xs={12} mx={'auto'} px={{ textAlign: 'center' }}>
              <CircularProgress className={'spinner'} />
              <p>Validating information</p>
            </Grid>
          ) : (
            <Grid item lg={4} xs={12} mx={'auto'}>
              <Typography variant="h4" component="h1" align={'center'} mb={4}>
                Login
              </Typography>
              <LoginForm onSubmit={onSubmit} />
            </Grid>
          )}
        </Grid>
        <Snackbar
          open={formState.invalid}
          autoHideDuration={6000}
          onClose={() => setFormState({ ...formState, invalid: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity="error">Invalid Credentials</Alert>
        </Snackbar>
      </Box>
    </Style.Wrapper>
  );
};

export default Login;
