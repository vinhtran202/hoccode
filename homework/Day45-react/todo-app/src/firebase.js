// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHl89HyyX75gj2Bp2D45Lqc-XGoRJp9Xk",
  authDomain: "todo-list-reactjs-b36ca.firebaseapp.com",
  projectId: "todo-list-reactjs-b36ca",
  storageBucket: "todo-list-reactjs-b36ca.appspot.com",
  messagingSenderId: "381466624003",
  appId: "1:381466624003:web:c6a3b9cf6f44e660e78e36",
  measurementId: "G-G3ZNRQFHYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
