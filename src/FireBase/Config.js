// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa0jxTRg4kaBdfnWAUT5DH8KgF6u-7Ay4",
  authDomain: "fl-computacion.firebaseapp.com",
  projectId: "fl-computacion",
  storageBucket: "fl-computacion.appspot.com",
  messagingSenderId: "122330173652",
  appId: "1:122330173652:web:17943f72183209cd9c2b41"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)