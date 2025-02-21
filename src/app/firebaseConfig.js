// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, onSnapshot } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWSRndXMgdA2xvTKLtiR5iIeNFG6sAH_U",
  authDomain: "backend-694f9.firebaseapp.com",
  projectId: "backend-694f9",
  storageBucket: "backend-694f9.firebasestorage.app",
  messagingSenderId: "469497592605",
  appId: "1:469497592605:web:f98dfa61faf6ac2e86fff4",
  measurementId: "G-5KPEP4EQHB"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, onSnapshot };




