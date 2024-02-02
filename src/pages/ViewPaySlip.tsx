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
import { documentAttachOutline } from 'ionicons/icons';

import { usePayslipDownload } from '../hooks/usePayslipDownload';
import { PdfViewer } from '../components/PdfViewer';

dayjs.extend(localizedFormat);
import './ViewPaySlip.css';

function ViewPaySlip() {
  const [paySlip, setPaySlip] = useState<PaySlip>();
  const [initialLoading, setInitialLoading] = useState(true);
  const params = useParams<{ id: string }>();

  const {
    download,
    fileBase64,
    initialLoading: initialFileLoading,
  } = usePayslipDownload(paySlip?.file || '');

  useIonViewWillEnter(() => {
    const ps = getPaySlip(parseInt(params.id, 10));
    setPaySlip(ps);
    setInitialLoading(false);
  });

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
            {initialFileLoading && <p>Loading...</p>}
            {!initialFileLoading && !fileBase64 && (
              <IonButton onClick={download}>Download Payslip</IonButton>
            )}
            {!!fileBase64 && <PdfViewer fileBase64={fileBase64} />}
          </div>
        ) : (
          <>{initialLoading ? <>Loading...</> : <div>PaySlip not found</div>}</>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPaySlip;
