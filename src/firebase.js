// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-_-0Ye9J0fd1crCTpaY6_pQU9bYUD9i0",
  authDomain: "stay-4daf4.firebaseapp.com",
  projectId: "stay-4daf4",
  storageBucket: "stay-4daf4.appspot.com",
  messagingSenderId: "25734697593",
  appId: "1:25734697593:web:6dc92c7107110661ecfaa8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();