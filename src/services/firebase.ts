// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ93cGbMchskpYZFWgI7xvZGSS7Gk3pqA",
  authDomain: "firebreak-bb54a.firebaseapp.com",
  projectId: "firebreak-bb54a",
  storageBucket: "firebreak-bb54a.appspot.com",
  messagingSenderId: "1074281201849",
  appId: "1:1074281201849:web:eaa49bc9301f69cb60db68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);