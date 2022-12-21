import {auth} from '../utilis/firebaseInit';
import {signInWithEmailAndPassword} from 'firebase/auth';

export const signIn = async(email, password) => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredentials.user);
}