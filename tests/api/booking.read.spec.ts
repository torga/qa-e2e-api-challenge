import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Should get booking by id', async ({ request }) => {
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

  const createdRes = await api.createBooking(payload);
  const createdBody = await createdRes.json();

  const bookingId = createdBody.bookingid;

  const res = await api.getBooking(bookingId);

  let body;

  try {
    body = await res.json();
  } catch {
    body = await res.text();
  }

  await saveApiEvidence(
    'get-booking-by-id',
    res,
    body,
    res.ok() ? 'success' : 'error',
    {
      bookingId
    }
  );

  expect(res.status()).toBe(200);
});