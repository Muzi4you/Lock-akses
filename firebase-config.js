import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB48dzwQbD1ffwcDu50V5aO1GMMt3q_oS0",
  authDomain: "akses-digital-zyy.firebaseapp.com",
  projectId: "akses-digital-zyy",
  storageBucket: "akses-digital-zyy.firebasestorage.app",
  messagingSenderId: "554224316314",
  appId: "1:554224316314:web:0c8dfbff5180b7818f1423"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
