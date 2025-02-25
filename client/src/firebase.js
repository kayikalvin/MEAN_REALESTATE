// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-47dad.firebaseapp.com",
  projectId: "mern-real-estate-47dad",
  storageBucket: "mern-real-estate-47dad.firebasestorage.app",
  messagingSenderId: "712484460824",
  appId: "1:712484460824:web:e487e93db67798edfaa66d",
  measurementId: "G-N1RQ8JXKW9"
};

// Initialize Firebase

// export const analytics = getAnalytics(app);


export const app = initializeApp(firebaseConfig);