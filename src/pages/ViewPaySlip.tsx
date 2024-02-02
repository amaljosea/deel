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

dayjs.extend(localizedFormat);

import { usePayslipDownload } from '../hooks/usePayslipDownload';
import { PdfViewer } from '../components/PdfViewer';

function ViewPaySlip() {
  const [paySlip, setPaySlip] = useState<PaySlip>();
  const params = useParams<{ id: string }>();

  const { download, fileBase64, initialLoading } = usePayslipDownload(
    paySlip?.file || ''
  );

  useIonViewWillEnter(() => {
    const msg = getPaySlip(parseInt(params.id, 10));
    setPaySlip(msg);
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
            {initialLoading && <p>Loading...</p>}
            {!initialLoading && !fileBase64 && (
              <IonButton onClick={download}>Download Payslip</IonButton>
            )}
            {!!fileBase64 && <PdfViewer fileBase64={fileBase64} />}
          </div>
        ) : (
          <div>PaySlip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPaySlip;
