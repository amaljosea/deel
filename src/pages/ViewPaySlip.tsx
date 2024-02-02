import { useState } from 'react';
import { PaySlip, getPaySlip } from '../data/paySlip';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import './ViewPaySlip.css';
import { documentAttachOutline } from 'ionicons/icons';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

dayjs.extend(localizedFormat);

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function ViewPaySlip() {
  const [paySlip, setPaySlip] = useState<PaySlip>();
  const params = useParams<{ id: string }>();
  const [base64, setBase64] = useState('');
  const writeSecretFile = async () => {
    if (!paySlip?.file) {
      alert('Error: no file');
    }

    try {
      const response = await fetch('/dummy.pdf');
      const arrayBuffer = await response.arrayBuffer();
      const base64String = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );

      const dataURL = `data:@file/pdf;base64,${base64String}`;
      const file = await Filesystem.writeFile({
        path: 'dummy.pdf',
        data: dataURL,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
        recursive: true,
      });

      const contents = await Filesystem.readFile({
        path: 'dummy.pdf',
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });

      console.log('secrets:', contents);

      setBase64(contents.data as string);

      const items = await Filesystem.readdir({
        path: '',
        directory: Directory.Documents,
      });

      alert(JSON.stringify(items));
      console.log('items', items);
      alert(file.uri);
    } catch (e) {
      alert(e);
    }
  };

  useIonViewWillEnter(() => {
    const msg = getPaySlip(parseInt(params.id, 10));
    setPaySlip(msg);
  });

  const viewFileInBrowser = (uri: string, name: string) => {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    link.click();
  };

  return (
    <IonPage id='view-payslip-page'>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton text='Pay Slips' defaultHref='/home'></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding' fullscreen>
        {paySlip ? (
          <div className='content-container'>
            <IonIcon
              className='document-icon'
              icon={documentAttachOutline}
              size='large'
            />
            <h2>Payslip {paySlip.id}</h2>
            <p>
              From {dayjs(paySlip.fromDate).format('LL')} to{' '}
              {dayjs(paySlip.toDate).format('LL')}
            </p>
            <IonButton
              onClick={() => {
                writeSecretFile();
              }}
            >
              Download Payslip
            </IonButton>

            {!!base64 && (
              <Document file={base64}>
                <Page pageNumber={1} />
              </Document>
            )}
          </div>
        ) : (
          <div>PaySlip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPaySlip;
