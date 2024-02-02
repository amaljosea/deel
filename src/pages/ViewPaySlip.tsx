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

function ViewPaySlip() {
  const [paySlip, setPaySlip] = useState<PaySlip>();
  const params = useParams<{ id: string }>();

  const writeSecretFile = async () => {
    try {
      const file = await Filesystem.writeFile({
        path: 'secrets/text.txt',
        data: 'This is a test',
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
        recursive: true,
      });
      alert(file.uri);
    } catch (e) {
      alert(e);
    }
  };

  useIonViewWillEnter(() => {
    const msg = getPaySlip(parseInt(params.id, 10));
    setPaySlip(msg);
  });

  const downloadFile = (uri: string, name: string) => {
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
                // downloadFile(paySlip.file, `${paySlip.id}`);
              }}
            >
              Download Payslip
            </IonButton>
          </div>
        ) : (
          <div>PaySlip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPaySlip;
