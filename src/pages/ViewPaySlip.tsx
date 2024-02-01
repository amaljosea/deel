import { useState } from "react";
import { PaySlip, getPaySlip } from "../data/paySlip";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useParams } from "react-router";
import "./ViewPaySlip.css";

function ViewPaySlip() {
  const [paySlip, setPaySlip] = useState<PaySlip>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getPaySlip(parseInt(params.id, 10));
    setPaySlip(msg);
  });

  return (
    <IonPage id="view-payslip-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Pay Slips" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {paySlip ? (
          <>
            <p>{paySlip.fromDate}</p>
            <p>{paySlip.toDate}</p>
            <p>{paySlip.file}</p>
            <p>{paySlip.id}</p>
            <IonButton>Download Payslip</IonButton>
          </>
        ) : (
          <div>PaySlip not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPaySlip;
