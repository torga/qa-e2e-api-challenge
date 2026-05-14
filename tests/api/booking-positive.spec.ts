import { test, expect } from '@playwright/test';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Should create a booking', async ({ request }) => {

  const payload = {
    firstname: 'Igor',
    lastname: 'QA',
    totalprice: 120,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-01-01',
      checkout: '2026-01-05'
    }
  };

  const res = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: payload
  });

  const body = await res.json();

  // save evidence
  await saveApiEvidence(
    'create-booking',
    res,
    body,
    res.ok() ? 'success' : 'error',
    payload
  );

  expect(res.status()).toBe(200);
  expect(body.bookingid).toBeDefined();
});