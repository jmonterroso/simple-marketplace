import React from 'react';
import * as Style from './style';

export interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Login: React.FC<Props> = ({}) => {
  return <Style.Wrapper></Style.Wrapper>;
};

export default Login;
