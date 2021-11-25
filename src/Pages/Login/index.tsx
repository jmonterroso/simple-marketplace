import React, { useState } from 'react';
import * as Style from './style';
import LoginForm, { ILogin } from '../../components/LoginForm';
import { Alert, Box, CircularProgress, Grid, Snackbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginPost } from '../../api';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actions';

export interface Props {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Login: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { setAuth } = bindActionCreators(actionCreators, dispatch);
  const [loginState, setLoginState] = useState({
    loading: false,
    invalid: false,
  });

  const navigate = useNavigate();
  const onSubmit = async (value: ILogin) => {
    setLoginState({
      ...loginState,
      loading: true,
    });
    const data = await loginPost(value);
    if (data.error) {
      setLoginState({
        ...loginState,
        invalid: true,
        loading: false,
      });
    } else {
      setLoginState({
        ...loginState,
        loading: false,
        invalid: false,
      });
      setAuth({
        isAuthenticated: true,
        user: data.user,
      });

      navigate('/', { replace: true });
    }
  };
  return (
    <Style.Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className={'login-container'} justifyContent={'center'} alignItems={'center'}>
          {loginState.loading ? (
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
          open={loginState.invalid}
          autoHideDuration={6000}
          onClose={() => setLoginState({ ...loginState, invalid: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity="error">Invalid Credentials</Alert>
        </Snackbar>
      </Box>
    </Style.Wrapper>
  );
};

export default Login;
