// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOUskt0UXfDE8GM2mMOaG5pCwYtXgANRo",
  authDomain: "female-7d7d6.firebaseapp.com",
  projectId: "female-7d7d6",
  storageBucket: "female-7d7d6.appspot.com",
  messagingSenderId: "57486915959",
  appId: "1:57486915959:web:4ad780eadb4bdf088b8972",
  measurementId: "G-FXYJ75GCYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }