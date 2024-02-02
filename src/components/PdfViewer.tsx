import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

export const PdfViewer = ({ fileBase64 }: { fileBase64: string | Blob }) => {
  return (
    <>
      <p>Payslip downloaded!</p>
      <Document file={fileBase64}>
        <Page scale={0.5} pageNumber={1} />
      </Document>
    </>
  );
};
