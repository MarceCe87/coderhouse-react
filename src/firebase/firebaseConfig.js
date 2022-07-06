import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV6ip5Or2buBfQwE3P8pA415vdebyI8PY",
  authDomain: "gomucomics-7b3c1.firebaseapp.com",
  projectId: "gomucomics-7b3c1",
  storageBucket: "gomucomics-7b3c1.appspot.com",
  messagingSenderId: "572130273684",
  appId: "1:572130273684:web:491a974e955ec51e3c4781",
  measurementId: "G-K3BYR6GFFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

