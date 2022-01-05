// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_aE-i0khvJL5HkTgB_SfUqnpv57KG2r0",
  authDomain: "whatsapp-2-62e85.firebaseapp.com",
  projectId: "whatsapp-2-62e85",
  storageBucket: "whatsapp-2-62e85.appspot.com",
  messagingSenderId: "1009388900863",
  appId: "1:1009388900863:web:63642becb1107ecff957ca",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
