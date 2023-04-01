import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB53b3M-dgoBRW8J446wGHhYNHzv_agrIk",
    authDomain: "netflix-clone-bd7ee.firebaseapp.com",
    projectId: "netflix-clone-bd7ee",
    storageBucket: "netflix-clone-bd7ee.appspot.com",
    messagingSenderId: "99187996954",
    appId: "1:99187996954:web:4c070f34dc679f137ed4a3",
    measurementId: "G-QW2JZLP2LE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;

export {auth};
export default db;
