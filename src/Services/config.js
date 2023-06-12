
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "proyecto--pet.firebaseapp.com",
    projectId: "proyecto--pet",
    storageBucket: "proyecto--pet.appspot.com",
    messagingSenderId: "953924156154",
    appId: "1:953924156154:web:66f11c247ac22a58166743",
    measurementId: "G-8S1L4GG484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);

