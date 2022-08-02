import { FireIcon } from '@heroicons/react/outline'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Home.css'

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>AppName</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="relative">
                <h1 className='text-center mt-80 text-3xl'>Lets build a cool mobile App <FireIcon className='w-12 inline-block text-teal-500'/></h1>
            </IonContent>
        </IonPage>
    )
}

export default Home
