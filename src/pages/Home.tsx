import PaySlipListItem from '../components/PaySlipListItem';
import { useEffect, useRef, useState } from 'react';
import { PaySlip, getPaySlips } from '../data/paySlip';
import {
  Animation,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  createAnimation,
  useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [paySlips, setPaySlips] = useState<PaySlip[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getPaySlips();
    setPaySlips(msgs);
    animation.current?.play();
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const contentEl = useRef<HTMLIonContentElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      animation.current = createAnimation()
        .addElement(contentEl.current!)
        .duration(500)
        .fromTo('opacity', '0', '1');
    }
  }, [contentEl]);

  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <IonPage id='home-page'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pay Slips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen ref={contentEl}>
        <IonRefresher slot='fixed' onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Pay Slips</IonTitle>
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
