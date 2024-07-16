// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmf6dglKizq_tpGeFwOeP0vx9tHW96we0",
    authDomain: "blogging-application-c83f0.firebaseapp.com",
    projectId: "blogging-application-c83f0",
    storageBucket: "blogging-application-c83f0.appspot.com",
    messagingSenderId: "169566354002",
    appId: "1:169566354002:web:916069e3bfa8ef4117fd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);