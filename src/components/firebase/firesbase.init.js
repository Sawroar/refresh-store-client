// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2uCOag4ttwVsOlxdAeHAhPm5kZ9DliA0",
  authDomain: "refresh-store.firebaseapp.com",
  projectId: "refresh-store",
  storageBucket: "refresh-store.firebasestorage.app",
  messagingSenderId: "60828774897",
  appId: "1:60828774897:web:65543283d222fe1d5e9450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);