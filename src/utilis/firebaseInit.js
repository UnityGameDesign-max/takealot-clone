import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBN1ltFmLt18WoKD0o6FdvAaVC0pSTHWVE",
    authDomain: "takealot-clone-ef7fb.firebaseapp.com",
    projectId: "takealot-clone-ef7fb",
    storageBucket: "takealot-clone-ef7fb.appspot.com",
    messagingSenderId: "114340662018",
    appId: "1:114340662018:web:aacf54193f16ee89ded01b",
    measurementId: "G-72CLTLD6QQ"
}
const firebaseApp = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:8001");

