// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK57_3a7zhIPPrPwqWXf0_GqKM5Dg4zuc",
  authDomain: "articles-b7682.firebaseapp.com",
  projectId: "articles-b7682",
  storageBucket: "articles-b7682.appspot.com",
  messagingSenderId: "241836307217",
  appId: "1:241836307217:web:9441a2fd813e4535dfd2b0",
  measurementId: "G-FZYWPE9FQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);