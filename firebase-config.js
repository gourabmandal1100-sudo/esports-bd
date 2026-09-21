// ============================================================
// E-SPORTS BD — Firebase Configuration
// File: firebase-config.js
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged, sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc,
  updateDoc, deleteDoc, query, where, orderBy, limit, onSnapshot,
  serverTimestamp, increment, runTransaction, Timestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEgkCkFkFgmfQ2JKqTBMIQTIGkv722hLI",
  authDomain: "e-sports-bd-777.firebaseapp.com",
  projectId: "e-sports-bd-777",
  storageBucket: "e-sports-bd-777.firebasestorage.app",
  messagingSenderId: "1023008356597",
  appId: "1:1023008356597:web:c0ca87c79b6d4633aeadbc",
  measurementId: "G-EGXQF7JJ0Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged, sendPasswordResetEmail,
  collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc,
  deleteDoc, query, where, orderBy, limit, onSnapshot,
  serverTimestamp, increment, runTransaction, Timestamp
};

export const fmt = n => Number(n || 0).toLocaleString('en-BD');
export const bdt = n => '৳' + fmt(n);
export const escapeHtml = s => String(s || '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const shortTime = iso => {
  if (!iso) return '';
  const d = iso.toDate ? iso.toDate() : new Date(iso);
  return d.toLocaleString('en-GB', {
    day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
  });
};
export const uid = () => 'id_' + Math.random().toString(36).slice(2, 12);
