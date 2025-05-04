// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "hunter-hackathon.firebaseapp.com",
  projectId: "hunter-hackathon",
  storageBucket: "hunter-hackathon.firebasestorage.app",
  messagingSenderId: "902021134990",
  appId: "1:902021134990:web:cee1b552894cbc21e627df",
  measurementId: "G-XW43DV9ZX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { db, auth };
