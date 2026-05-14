import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Should create booking successfully', async ({ request }) => {

  const api = new ApiClient(request);

  const payload = {
    firstname: 'Igor',
    lastname: 'QA',
    totalprice: 100,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-01-10',
      checkout: '2026-01-15'
    }
  };

  const res = await api.createBooking(payload);

  const body = await res.json();

  // save evidence
  await saveApiEvidence(
    'create-booking-successfully',
    res,
    body,
    res.ok() ? 'success' : 'error',
    payload
  );

  expect(res.status()).toBe(200);
  expect(body.bookingid).toBeDefined();
});