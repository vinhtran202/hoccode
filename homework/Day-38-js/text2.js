// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEbQZ_Aum352fexwpj4RZbhr3kvKdpJ48",
  authDomain: "infinity-scroll-b5ba2.firebaseapp.com",
  databaseURL:
    "https://infinity-scroll-b5ba2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "infinity-scroll-b5ba2",
  storageBucket: "infinity-scroll-b5ba2.appspot.com",
  messagingSenderId: "237440663584",
  appId: "1:237440663584:web:1db0abc85522efa6033c45",
  measurementId: "G-ZBMR58NCQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

// Show message function
function showMessage(message, divId) {
  const messageDiv = document.querySelector(`#${divId}`);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// Sign up event listener
const signUpForm = document.querySelector("#signUpForm");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#rEmail").value;
  const password = document.querySelector("#rPassword").value;
  const firstName = document.querySelector("#fName").value;
  const lastName = document.querySelector("#lName").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
      };
      showMessage("Account Created Successfully", "signUpMessage");
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("Error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        showMessage("Email Address Already Exists !!!", "signUpMessage");
      } else {
        showMessage("Unable to create User", "signUpMessage");
      }
    });
});

const signInForm = document.querySelector("#signInForm");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("Login successful", "signInMessage");
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signInMessage");
      } else {
        showMessage("Account does not Exist", "signInMessage");
      }
    });
});

// Toggle between Sign In and Sign Up forms
document.querySelector("#login").addEventListener("click", () => {
  document.querySelector(".sign-up").style.display = "none";
  document.querySelector(".sign-in").style.display = "block";
});

document.querySelector("#register").addEventListener("click", () => {
  document.querySelector(".sign-in").style.display = "none";
  document.querySelector(".sign-up").style.display = "block";
});
