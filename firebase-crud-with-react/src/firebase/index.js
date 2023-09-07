// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq4kaMxNA8-n8_Kyt4q8OqiK0KkFOiV8A",
  authDomain: "react-crud-c6c04.firebaseapp.com",
  projectId: "react-crud-c6c04",
  storageBucket: "react-crud-c6c04.appspot.com",
  messagingSenderId: "856020395881",
  appId: "1:856020395881:web:1c602d4dee260a7d747ff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export { db };
