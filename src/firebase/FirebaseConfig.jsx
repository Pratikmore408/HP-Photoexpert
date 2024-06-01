// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsakTGmRLMd3WYYBZ5wRsn3ve4NdwBjG0",
  authDomain: "hp-photoexpert.firebaseapp.com",
  projectId: "hp-photoexpert",
  storageBucket: "hp-photoexpert.appspot.com",
  messagingSenderId: "416579025396",
  appId: "1:416579025396:web:0df33708ad922d4b1761a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
