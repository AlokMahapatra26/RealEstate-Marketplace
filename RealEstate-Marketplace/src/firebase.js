// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb1Iw6Eft5KiHeZfwrGX2-Ot_3_Lrf5l8",
  authDomain: "stay-realestate-marketplace.firebaseapp.com",
  projectId: "stay-realestate-marketplace",
  storageBucket: "stay-realestate-marketplace.appspot.com",
  messagingSenderId: "686910722805",
  appId: "1:686910722805:web:5938b2d4eca9117f2e6bbc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();