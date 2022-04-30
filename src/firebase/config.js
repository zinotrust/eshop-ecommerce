import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "eshop-ea8e7.firebaseapp.com",
  projectId: "eshop-ea8e7",
  storageBucket: "eshop-ea8e7.appspot.com",
  messagingSenderId: "146569443233",
  appId: "1:146569443233:web:46db000fc2c897f3b73de0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
