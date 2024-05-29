// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Re12R_jhBWsnN7bKuyTVXtVq3Pw-f14",
  authDomain: "sucursal2-29756.firebaseapp.com",
  projectId: "sucursal2-29756",
  storageBucket: "sucursal2-29756.appspot.com",
  messagingSenderId: "215568109867",
  appId: "1:215568109867:web:f9a019a92bd7ef68c6f56e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db, app };
