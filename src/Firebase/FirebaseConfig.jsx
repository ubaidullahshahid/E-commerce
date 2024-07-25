// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBonFPMRJEnJn26-DbEW8Q7ggNm9r_2C8A",
  authDomain: "ecommerce-d2ddc.firebaseapp.com",
  projectId: "ecommerce-d2ddc",
  storageBucket: "ecommerce-d2ddc.appspot.com",
  messagingSenderId: "211682078301",
  appId: "1:211682078301:web:e2ed5af33c482ed8a6e7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {auth,fireDB}