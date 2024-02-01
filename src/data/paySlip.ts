export interface PaySlip {
  fromDate: string;
  toDate: string;
  file: string;
  id: number;
}

const paySlips: PaySlip[] = [
  {
    id: 1,
    fromDate: "2023-01-01",
    toDate: "2023-01-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 2,
    fromDate: "2023-02-01",
    toDate: "2023-02-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 3,
    fromDate: "2023-03-01",
    toDate: "2023-03-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 4,
    fromDate: "2023-04-01",
    toDate: "2023-04-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 5,
    fromDate: "2023-05-01",
    toDate: "2023-05-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 6,
    fromDate: "2023-06-01",
    toDate: "2023-06-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 7,
    fromDate: "2023-07-01",
    toDate: "2023-07-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 8,
    fromDate: "2023-08-01",
    toDate: "2023-08-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 9,
    fromDate: "2023-09-01",
    toDate: "2023-09-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 10,
    fromDate: "2023-10-01",
    toDate: "2023-10-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 11,
    fromDate: "2023-11-01",
    toDate: "2023-11-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 12,
    fromDate: "2023-12-01",
    toDate: "2023-12-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 13,
    fromDate: "2024-01-01",
    toDate: "2024-01-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 14,
    fromDate: "2024-02-01",
    toDate: "2024-02-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: 15,
    fromDate: "2024-03-01",
    toDate: "2024-03-15",
    file: "https://www.africau.edu/images/default/sample.pdf",
  },
];

export const getPaySlips = () => paySlips;

export const getPaySlip = (id: number) => paySlips.find((m) => m.id === id);
