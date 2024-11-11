// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_HY1S7co9TRuJcabQPJ0ec3DSdFEzNDg",
  authDomain: "seby-test-a3dd6.firebaseapp.com",
  projectId: "seby-test-a3dd6",
  storageBucket: "seby-test-a3dd6.firebasestorage.app",
  messagingSenderId: "896713612415",
  appId: "1:896713612415:web:6fbdc5e35935e9971e734a",
  measurementId: "G-F2S8G5HS41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);