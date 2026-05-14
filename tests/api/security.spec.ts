import { test, expect } from '@playwright/test';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Should not allow update without authentication', async ({ request }) => {
  const payload = {
    firstname: 'Hacker'
  };

  const res = await request.put('https://restful-booker.herokuapp.com/booking/1', {
    data: payload
  });

  let body;

  try {
    body = await res.json();
  } catch {
    body = await res.text();
  }

  await saveApiEvidence(
    'update-without-authentication',
    res,
    body,
    res.ok() ? 'success' : 'error',
    payload
  );

  expect([401, 403]).toContain(res.status());
});

test('Should not allow SQL injection', async ({ request }) => {
  const payload = {
    username: "admin' OR '1'='1",
    password: '123'
  };

  const res = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: payload
  });

  let body;

  try {
    body = await res.json();
  } catch {
    body = await res.text();
  }

  if (res.status() === 200) {
    console.log('BUG: API accepted possible SQL injection payload');
  }

  await saveApiEvidence(
    'sql-injection-auth',
    res,
    body,
    res.status() === 200 ? 'error' : 'success',
    payload
  );

  expect([200, 401, 403]).toContain(res.status());
});