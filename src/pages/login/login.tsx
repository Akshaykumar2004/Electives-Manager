import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonPickerColumnOption, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import React,{ useState} from "react"
import { useHistory } from "react-router";
import './login.css'
const Login:React.FC = () => {
    const [email, setEmail] = useState('');
    const [passwors, setPassword] = useState('');
    const [showtoast, setShowToast] = useState(false);
    const [toastmessage, setToastMessage] = useState('');
    const history = useHistory();

    const handelLogin = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/login',{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'username':email,
                    'password': passwors,
                }),
            });
            
            if (response.ok) {
                const data = await response.json();
                setToastMessage('Login succesful');

                if (data.role==='student'){
                    history.push('/student');
                }else if (data.role==='faculty'){
                    history.push('/faculty');
                }else if (data.role==='admin'){
                    history.push('/admin');
                }else{
                    setToastMessage('role not recognised');
                }
            } else {
                setToastMessage("Login failed, please check your credentials.");
            }
        } catch (error) {
            setToastMessage('an error occured, please try again later');
            console.log(error);
        }
        setShowToast(true);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle> Login </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonInput
                placeholder="Email"
                value={email}
                onIonChange={(e)=> setEmail(e.detail.value!)}
                />
                <IonInput
                placeholder="Password"
                type="password"
                value={passwors}
                onIonChange={(e)=>setPassword(e.detail.value!)}
                />
                <IonButton expand="block" onClick={handelLogin}>Login</IonButton>
                <IonToast
                isOpen={showtoast}
                message={toastmessage}
                duration={2000}
                onDidDismiss={()=> setShowToast(false)}
                />
            </IonContent>
        </IonPage>
    );    
};

export default Login;