// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF2LbhNNK4YplzIWgmxJ9cYrEm65jqIqY",
  authDomain: "project-2288c.firebaseapp.com",
  projectId: "project-2288c",
  storageBucket: "project-2288c.appspot.com",
  messagingSenderId: "717490393451",
  appId: "1:717490393451:web:52fbcc78b5d9cf03f97c2e",
  measurementId: "G-ERYSP3RTTB"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB= getFirestore(FIREBASE_APP)