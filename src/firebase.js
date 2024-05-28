// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS3n4iFnsg9vns0uRxwazTn08CSFO9xGA",
  authDomain: "sucursal-c652e.firebaseapp.com",
  projectId: "sucursal-c652e",
  storageBucket: "sucursal-c652e.appspot.com",
  messagingSenderId: "909613926452",
  appId: "1:909613926452:web:a389b0e66d2b88667b2261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };