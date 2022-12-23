import {auth} from '../utilis/firebaseInit';
import {signInWithEmailAndPassword} from 'firebase/auth';

export const signIn = async (email, password) => {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    return userLogin;
}