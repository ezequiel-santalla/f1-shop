import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhouse-f1-shop.firebaseapp.com",
  projectId: "coderhouse-f1-shop",
  storageBucket: "coderhouse-f1-shop.appspot.com",
  messagingSenderId: "997292975888",
  appId: "1:997292975888:web:36cce444d50cfbd7cbe795"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
