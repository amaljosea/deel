import { IonItem, IonLabel, IonNote } from "@ionic/react";
import { PaySlip } from "../data/paySlip";
import "./PaySlipListItem.css";

interface PaySlipListItemProps {
  paySlip: PaySlip;
}

const PaySlipListItem: React.FC<PaySlipListItemProps> = ({ paySlip }) => {
  return (
    <IonItem routerLink={`/payslip/${paySlip.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {paySlip.fromName}
          <span className="date">
            <IonNote>{paySlip.date}</IonNote>
          </span>
        </h2>
        <h3>{paySlip.subject}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default PaySlipListItem;
