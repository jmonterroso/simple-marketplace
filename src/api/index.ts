import { ILogin } from '../components/LoginForm';
// this can be replaced by a env variable in production
const BASE_URL = 'http://localhost:8080';

export const loginPost = async (value: ILogin) =>
  fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  })
    .then((res) => res.json())
    .then((res) => res);
