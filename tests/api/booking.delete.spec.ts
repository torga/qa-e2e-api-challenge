import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';
import { getToken } from '../../utils/auth';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Should delete booking', async ({ request }) => {
  const api = new ApiClient(request);
  const token = await getToken(request);

  const createPayload = {
    firstname: 'Igor',
    lastname: 'QA',
    totalprice: 100,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-01-10',
      checkout: '2026-01-15'
    }
  };

  const createdRes = await api.createBooking(createPayload);
  const createdBody = await createdRes.json();
  const bookingId = createdBody.bookingid;

  const res = await api.deleteBooking(bookingId, token);

  let body;
  try {
    body = await res.json();
  } catch {
    body = await res.text();
  }

  await saveApiEvidence(
    'delete-booking',
    res,
    body,
    res.ok() ? 'success' : 'error',
    { bookingId }
  );

  expect([200, 201, 204]).toContain(res.status());
});