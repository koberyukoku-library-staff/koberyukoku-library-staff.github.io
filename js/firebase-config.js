// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCN0xbBPlPJM1szoOik6yMFgkiNRy_QhZY",
  authDomain: "koberyukoku-library-staff.firebaseapp.com",
  projectId: "koberyukoku-library-staff",
  storageBucket: "koberyukoku-library-staff.firebasestorage.app",
  messagingSenderId: "138126502371",
  appId: "1:138126502371:web:c613b19bba31ef3c87d8d6",
  measurementId: "G-P6N0TFRY9Q"
};

export const app = initializeApp(firebaseConfig);
