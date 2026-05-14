import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Should filter booking by firstname', async ({ request }) => {

  const api = new ApiClient(request);

  const filters = {
    firstname: 'Igor'
  };

  const res = await api.filterBooking(filters);

  const body = await res.json();

  // save evidence
  await saveApiEvidence(
    'filter-booking',
    res,
    body,
    res.ok() ? 'success' : 'error',
    filters
  );

  expect(res.status()).toBe(200);
  expect(Array.isArray(body)).toBeTruthy();
});