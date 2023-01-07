import {auth} from '../utilis/firebaseInit';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

export const signIn = async (email, password) => {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    return userLogin;
}

export const signUp = async (email, password) => {
    const registerUser = await createUserWithEmailAndPassword(auth, email, password);
    return registerUser;
}