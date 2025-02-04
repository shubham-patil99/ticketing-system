// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdXAa5ArL2Z1CDQ-_ddf73lmhtL34CIRo",
  authDomain: "fox-university-4f131.firebaseapp.com",
  projectId: "fox-university-4f131",
  storageBucket: "fox-university-4f131.appspot.com",
  messagingSenderId: "802516214069",
  appId: "1:802516214069:web:9fc6d28e026a941414ec7c",
  measurementId: "G-8Q14E60FWN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);