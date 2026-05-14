import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Should reject negative price', async ({ request }) => {

  const api = new ApiClient(request);

  const payload = {
    firstname: 'Igor',
    lastname: 'QA',
    totalprice: -100
  };

  const res = await api.createBooking(payload);

  let body;

  try {
    body = await res.json();
  } catch {
    body = await res.text();
  }

  // save evidence
  await saveApiEvidence(
    'reject-negative-price',
    res,
    body,
    res.ok() ? 'success' : 'error',
    payload
  );

  if (res.status() === 200) {
    console.log('BUG: API accepted negative price');
  }

  expect(res.status()).not.toBe(200);
});