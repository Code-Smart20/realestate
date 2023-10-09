// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjjiCaMLTus6RDo0ll-5o08uLANUn9StU",
    authDomain: "realestate-b4246.firebaseapp.com",
    projectId: "realestate-b4246",
    storageBucket: "realestate-b4246.appspot.com",
    messagingSenderId: "319312172969",
    appId: "1:319312172969:web:0527f3e3d7b35c3c0016b8"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)