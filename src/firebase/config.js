import firebase from 'firebase/app';
//Import any firebase packages we will be using
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_s4Ilsc2fa37WwiL7NrLMjzVca1Tsym4",
    authDomain: "musico-co.firebaseapp.com",
    projectId: "musico-co",
    storageBucket: "musico-co.appspot.com",
    messagingSenderId: "404650315191",
    appId: "1:404650315191:web:f7081c5e22d83fbca26c32"
};

//Init the app
firebase.initializeApp(firebaseConfig);

//Init any services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//Export any service we have initiated above
export { projectFirestore, projectAuth };