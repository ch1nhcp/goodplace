import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFTIwQxTyuAAhI2uwea6NxQPd70pgugHw",
  authDomain: "goodplace-14342.firebaseapp.com",
  projectId: "goodplace-14342",
  storageBucket: "goodplace-14342.appspot.com",
  messagingSenderId: "359399032152",
  appId: "1:359399032152:web:5f7d0bd77def36fc3e512d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
