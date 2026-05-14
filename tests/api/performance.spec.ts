import { test, expect } from '@playwright/test';
import { saveApiEvidence } from '../../utils/apiEvidence';

test('Performance - create booking', async ({ request }) => {

 const payload = {
  firstname: 'Perf',
  lastname: 'Test',
  totalprice: 150,
  depositpaid: true,
  bookingdates: {
    checkin: '2026-01-01',
    checkout: '2026-01-05'
  }
};

  const start = Date.now();

  const res = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: payload
  });

  const duration = Date.now() - start;

  let body;

  try {
    body = await res.json();
  } catch {
    body = await res.text();
  }

  console.log(`Response time: ${duration}ms`);

  // save evidence
  await saveApiEvidence(
    'performance-create-booking',
    res,
    {
      responseBody: body,
      durationMs: duration
    },
    res.ok() ? 'success' : 'error',
    payload
  );

  expect(res.status()).toBe(200);
  expect(duration).toBeLessThan(1000);
});