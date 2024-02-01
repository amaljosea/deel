import { IonItem, IonLabel } from "@ionic/react";
import { PaySlip } from "../data/paySlip";
import "./PaySlipListItem.css";

interface PaySlipListItemProps {
  paySlip: PaySlip;
}

const PaySlipListItem: React.FC<PaySlipListItemProps> = ({ paySlip }) => {
  return (
    <IonItem routerLink={`/payslip/${paySlip.id}`} detail={false}>
      <IonLabel>
        <p>{paySlip.fromDate}</p>
        <p>{paySlip.toDate}</p>
        <p>{paySlip.file}</p>
        <p>{paySlip.id}</p>
      </IonLabel>
    </IonItem>
  );
};

export default PaySlipListItem;
