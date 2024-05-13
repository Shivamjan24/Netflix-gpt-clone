// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYES1Q3ZjP9Rbknp1b9mtqmsLG_mnhjss",
  authDomain: "netflix-gpt-1ec55.firebaseapp.com",
  projectId: "netflix-gpt-1ec55",
  storageBucket: "netflix-gpt-1ec55.appspot.com",
  messagingSenderId: "385742003462",
  appId: "1:385742003462:web:9d3c1904c2b9ee8e629287",
  measurementId: "G-JG3J3BS5SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();