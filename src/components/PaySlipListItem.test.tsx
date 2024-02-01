import { render } from '@testing-library/react';
import PaySlipListItem from './PaySlipListItem';

test('id and dates render correctly', () => {
  const { getByText } = render(
    <PaySlipListItem
      paySlip={{
        id: 1,
        fromDate: '2023-01-01',
        toDate: '2023-01-15',
        file: 'https://www.africau.edu/images/default/sample.pdf',
      }}
    />
  );
  const h2 = getByText('Payslip 1');
  expect(h2).toBeInTheDocument();

  const p = getByText('From January 1, 2023 to January 15, 2023');
  expect(p).toBeInTheDocument();
});
