// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFJFHFR7kL4BP8StNHsRa7sDFXlTbjJ8Q",
  authDomain: "capep-8d383.firebaseapp.com",
  projectId: "capep-8d383",
  storageBucket: "capep-8d383.appspot.com",
  messagingSenderId: "1067334989831",
  appId: "1:1067334989831:web:4b8b8aed8a55f54ec592a2",
  measurementId: "G-QB5SBRQ77X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()