// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRWmoYZKUiw2hp6fVYJbfQMqihQQePWdg",
  authDomain: "coffee-store-5e681.firebaseapp.com",
  projectId: "coffee-store-5e681",
  storageBucket: "coffee-store-5e681.firebasestorage.app",
  messagingSenderId: "197564620179",
  appId: "1:197564620179:web:f52d6b7f42cbda43459c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);