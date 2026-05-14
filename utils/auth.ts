import { APIRequestContext } from '@playwright/test';

const BASE_URL = 'https://restful-booker.herokuapp.com';

export async function getToken(request: APIRequestContext) {
  const res = await request.post(`${BASE_URL}/auth`, {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  const body = await res.json();

  return body.token;
}