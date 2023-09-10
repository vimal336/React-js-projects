import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDMAitMh9oE_wZl965DgKE0XXsHDBHZly0",
    authDomain: "my-netflix-clone-e2fd7.firebaseapp.com",
    projectId: "my-netflix-clone-e2fd7",
    storageBucket: "my-netflix-clone-e2fd7.appspot.com",
    messagingSenderId: "793215957934",
    appId: "1:793215957934:web:fa326e462848fc72f2663f",
    measurementId: "G-88E8K6GPMN"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  export { app, auth, db };
