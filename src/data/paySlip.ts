export interface PaySlip {
  fromDate: string;
  toDate: string;
  file: string;
  id: number;
}

const paySlips: PaySlip[] = [
  {
    id: 1,
    fromDate: '2023-01-01',
    toDate: '2023-01-15',
    file: 'payslips/payslip1.pdf',
  },
  {
    id: 2,
    fromDate: '2023-02-01',
    toDate: '2023-02-15',
    file: 'payslips/payslip2.pdf',
  },
  {
    id: 3,
    fromDate: '2023-03-01',
    toDate: '2023-03-15',
    file: 'payslips/payslip3.pdf',
  },
  {
    id: 4,
    fromDate: '2023-04-01',
    toDate: '2023-04-15',
    file: 'payslips/payslip4.pdf',
  },
  {
    id: 5,
    fromDate: '2023-05-01',
    toDate: '2023-05-15',
    file: 'payslips/payslip5.pdf',
  },
  {
    id: 6,
    fromDate: '2023-06-01',
    toDate: '2023-06-15',
    file: 'payslips/payslip6.pdf',
  },
  {
    id: 7,
    fromDate: '2023-07-01',
    toDate: '2023-07-15',
    file: 'payslips/payslip7.pdf',
  },
  {
    id: 8,
    fromDate: '2023-08-01',
    toDate: '2023-08-15',
    file: 'payslips/payslip8.pdf',
  },
  {
    id: 9,
    fromDate: '2023-09-01',
    toDate: '2023-09-15',
    file: 'payslips/payslip9.pdf',
  },
  {
    id: 10,
    fromDate: '2023-10-01',
    toDate: '2023-10-15',
    file: 'payslips/payslip10.pdf',
  },
];

export const getPaySlips = () => paySlips;

export const getPaySlip = (id: number) => paySlips.find((m) => m.id === id);
