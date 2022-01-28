// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6D2opScVBCOv89YEtfgwFBTeopje6vLw",
  authDomain: "react-memo-90934.firebaseapp.com",
  projectId: "react-memo-90934",
  storageBucket: "react-memo-90934.appspot.com",
  messagingSenderId: "1064340244891",
  appId: "1:1064340244891:web:c52cea32ff4efc7aa8393e",
  measurementId: "G-CM14LDDG93"
};

initializeApp(firebaseConfig);
// Initialize Firebase

export const db = getFirestore();