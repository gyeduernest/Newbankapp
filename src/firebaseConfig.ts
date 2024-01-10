// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC26m9Pmfuni7NVIqzabY2MFZz32RgR9zc",
  authDomain: "trustfundme-a1a89.firebaseapp.com",
  projectId: "trustfundme-a1a89",
  storageBucket: "trustfundme-a1a89.appspot.com",
  messagingSenderId: "840954253303",
  appId: "1:840954253303:web:a89a6a530a93444edda8f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication object
export const auth = getAuth(app);
