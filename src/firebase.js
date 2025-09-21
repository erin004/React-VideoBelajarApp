// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCXScWxFRB0Op0TecBgv-Rb60F0SBzrQ",
  authDomain: "videobelajar-4bca5.firebaseapp.com",
  projectId: "videobelajar-4bca5",
  storageBucket: "videobelajar-4bca5.firebasestorage.app",
  messagingSenderId: "942647465101",
  appId: "1:942647465101:web:15d16e24e70b7c7c7bbec4",
  measurementId: "G-X4NRY14NP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);