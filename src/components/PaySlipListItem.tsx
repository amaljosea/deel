import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { PaySlip } from '../data/paySlip';
import './PaySlipListItem.css';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { documentAttachOutline } from 'ionicons/icons';

dayjs.extend(localizedFormat);

interface PaySlipListItemProps {
  paySlip: PaySlip;
}

const PaySlipListItem: React.FC<PaySlipListItemProps> = ({ paySlip }) => {
  return (
    <IonItem routerLink={`/payslip/${paySlip.id}`} detail={false}>
      <IonIcon
        className='document-icon'
        icon={documentAttachOutline}
        size='large'
      />
      <IonLabel>
        <h2>Payslip {paySlip.id}</h2>
        <p>
          From {dayjs(paySlip.fromDate).format('LL')} to{' '}
          {dayjs(paySlip.toDate).format('LL')}
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default PaySlipListItem;
