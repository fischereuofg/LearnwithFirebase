// NOTE YOU CAN REMOVE THE ANALYTICS IMPORT 
 import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

/* Paste  API code here */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAfAegDXuEG0SfohPvQz4DPKXi6ONwGGsQ",
authDomain: "fbtfischer.firebaseapp.com",
projectId: "fbtfischer",
storageBucket: "fbtfischer.firebasestorage.app",
messagingSenderId: "670930940585",
appId: "1:670930940585:web:3ec8d138331ebb30a16fb8",
measurementId: "G-QR4RG2C1FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Additional imports to initialize Firebase 
// NOTE YOU CAN REMOVE THE ANALYTICS variable 
export const auth = getAuth(app);
export const db = getFirestore(app);
