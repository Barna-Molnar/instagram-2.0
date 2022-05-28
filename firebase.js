// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCChocT4Mz-niyEpSvzRorgm5gL6DFqDM",
    authDomain: "instagram-2-b0231.firebaseapp.com",
    projectId: "instagram-2-b0231",
    storageBucket: "instagram-2-b0231.appspot.com",
    messagingSenderId: "595382749525",
    appId: "1:595382749525:web:2d6b078ce63a3da39c07dc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };