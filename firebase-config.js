// firebase-config.js — dipakai bersama oleh index (tamu), operator, wasit, setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8iriYJKwKRwkUSCFCtg6dNi8k0z-4fq8",
  authDomain: "livewt-33fa4.firebaseapp.com",
  databaseURL: "https://livewt-33fa4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "livewt-33fa4",
  storageBucket: "livewt-33fa4.firebasestorage.app",
  messagingSenderId: "449784629916",
  appId: "1:449784629916:web:fd5fbda8b82c0ecdb47b59"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
