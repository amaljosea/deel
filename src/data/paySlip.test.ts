import { getPaySlip, getPaySlips } from './paySlip';

test('getPaySlip works correctly', () => {
  const paySlips = getPaySlips();
  const paySlip = getPaySlip(1);
  expect(paySlip).toBe(paySlips[0]);
});
