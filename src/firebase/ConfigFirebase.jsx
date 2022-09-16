import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvETco_C-PCNK-B7tzojnHQu2I_RW5ypQ",
  authDomain: "rigister-b967a.firebaseapp.com",
  projectId: "rigister-b967a",
  storageBucket: "rigister-b967a.appspot.com",
  messagingSenderId: "1030542622903",
  appId: "1:1030542622903:web:4793ffbad2e5f3aacc4d32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
