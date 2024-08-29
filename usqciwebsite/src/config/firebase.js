// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxSiXrXYvEANKHOprCd9dCLXFmipR6bxE",
  authDomain: "usqciwebsite.firebaseapp.com",
  projectId: "usqciwebsite",
  storageBucket: "usqciwebsite.appspot.com",
  messagingSenderId: "832498613654",
  appId: "1:832498613654:web:6275918a5d580075e431b7",
  measurementId: "G-6R0Q9L8HRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };