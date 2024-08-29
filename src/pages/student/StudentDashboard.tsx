import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const StudentDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Student Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome, Student!</h2>
        <p>Here you can view and manage your electives.</p>
        <IonButton expand="block" routerLink="/electives">View Electives</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default StudentDashboard;
