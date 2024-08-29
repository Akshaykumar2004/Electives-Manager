import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const FacultyDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Faculty Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome, Faculty Member!</h2>
        <p>Here you can manage your courses and view student progress.</p>
        <IonButton expand="block" routerLink="/courses">Manage Courses</IonButton>
        <IonButton expand="block" routerLink="/students">View Students</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FacultyDashboard;
