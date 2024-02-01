import PaySlipListItem from "../components/PaySlipListItem";
import { useState } from "react";
import { PaySlip, getPaySlips } from "../data/paySlip";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [paySlips, setPaySlips] = useState<PaySlip[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getPaySlips();
    setPaySlips(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {paySlips.map((ps) => (
            <PaySlipListItem key={ps.id} paySlip={ps} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
