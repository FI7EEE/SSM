// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhSvzf58hEslcvdcx8h0_JB5Ll3MPS-3o",
  authDomain: "smartspacemanagement-ba2ef.firebaseapp.com",
  projectId: "smartspacemanagement-ba2ef",
  storageBucket: "smartspacemanagement-ba2ef.firebasestorage.app",
  messagingSenderId: "851722687397",
  appId: "1:851722687397:web:bb1fccea9fc8eb0a764e4c",
  // measurementId: "G-6T9J38GD74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Export sesuai kebutuhan
export { app, auth, db };
