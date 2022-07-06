// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr3cx5Gkh4GXPsAKu6oPLBTRnRQ8hc-eo",
  authDomain: "creative-agency-43bbc.firebaseapp.com",
  projectId: "creative-agency-43bbc",
  storageBucket: "creative-agency-43bbc.appspot.com",
  messagingSenderId: "473334324516",
  appId: "1:473334324516:web:f6192a515370483d8a67b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
