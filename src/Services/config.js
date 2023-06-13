
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "reactjs-proyectopet.firebaseapp.com",
  projectId: "reactjs-proyectopet",
  storageBucket: "reactjs-proyectopet.appspot.com",
  messagingSenderId: "107272522707",
  appId: "1:107272522707:web:5114a7422d0923db537d26"
};
  
  
  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore (app);
