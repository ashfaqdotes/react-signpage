// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJcotJ7ZA8G8j9RZweWAn3-opM--Y5jNk",
  authDomain: "reactdemo-6fd8a.firebaseapp.com",
  projectId: "reactdemo-6fd8a",
  storageBucket: "reactdemo-6fd8a.appspot.com",
  messagingSenderId: "955107333228",
  appId: "1:955107333228:web:395045af24b2c18885b449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();
export default {
  auth, db
}