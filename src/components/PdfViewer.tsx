import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

export const PdfViewer = ({ fileBase64 }: { fileBase64: string | Blob }) => {
  return (
    <Document file={fileBase64}>
      <Page pageNumber={1} />
    </Document>
  );
};
