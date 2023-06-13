
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCvP6CAYAeYwy7i9dTgt_U8gbwrYskenbc",
    authDomain: "proyectopet2022.firebaseapp.com",
    projectId: "proyectopet2022",
    storageBucket: "proyectopet2022.appspot.com",
    messagingSenderId: "763725605410",
    appId: "1:763725605410:web:41ed4daf08e2b0d21d387b"
  };
  
  
  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore (app);
