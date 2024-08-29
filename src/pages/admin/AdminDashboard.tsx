import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const AdminDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome, Admin!</h2>
        <p>Here you can manage users and oversee the electives system.</p>
        <IonButton expand="block" routerLink="/manage-users">Manage Users</IonButton>
        <IonButton expand="block" routerLink="/manage-electives">Manage Electives</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AdminDashboard;
