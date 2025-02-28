// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mern-9a8c3.firebaseapp.com",
  projectId: "estate-mern-9a8c3",
  storageBucket: "estate-mern-9a8c3.firebasestorage.app",
  messagingSenderId: "777594097533",
  appId: "1:777594097533:web:137f808312a491765a4614"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);