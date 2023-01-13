import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkQ4c24-DmWvqgTV9z1vQcAA4EHqMwdcw",
    authDomain: "netflix-clone-9c59a.firebaseapp.com",
    projectId: "netflix-clone-9c59a",
    storageBucket: "netflix-clone-9c59a.appspot.com",
    messagingSenderId: "657979687381",
    appId: "1:657979687381:web:6aca81a3c2181fc10f3d5c",
    measurementId: "G-6L269WDB3Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;

export {auth};
export default db;
