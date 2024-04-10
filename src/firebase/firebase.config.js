// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQGmUSeT9pH8E3IFlxU-zW9hiztTElLSQ",
    authDomain: "real-state-e2575.firebaseapp.com",
    projectId: "real-state-e2575",
    storageBucket: "real-state-e2575.appspot.com",
    messagingSenderId: "1080881253607",
    appId: "1:1080881253607:web:5c6bb4931a70a0173c6642"
  };
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;