// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/database";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAJLfZ6u1AUL3Ne0J-qJRLRAeQxCH0Bvnk",
  authDomain: "food-studio-a10b7.firebaseapp.com",
  projectId: "food-studio-a10b7",
  storageBucket: "food-studio-a10b7.appspot.com",
  messagingSenderId: "182884177059",
  appId: "1:182884177059:web:5bc7d7e2960f578d54db16",
  measurementId: "G-R2YQXX0RR4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const database = firebase.database();
const auth = getAuth();

export {firebase, auth, database};