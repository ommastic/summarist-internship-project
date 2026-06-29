// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD576pHtcxW90e38jbuyfMH0ZKPU6V4dIk",
  authDomain: "summarist-app-project.firebaseapp.com",
  projectId: "summarist-app-project",
  storageBucket: "summarist-app-project.firebasestorage.app",
  messagingSenderId: "477733618335",
  appId: "1:477733618335:web:73b99b85867cb096d6d8aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const initFirebase = () => {
  return app;
}