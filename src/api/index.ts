import { ILogin } from '../components/LoginForm';
// this can be replaced by a env variable in production
const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'https://obscure-ocean-06187.herokuapp.com' : 'http://localhost:8080';

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

export const fetchProducts = async () =>
  fetch(`${BASE_URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res);
