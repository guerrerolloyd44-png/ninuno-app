import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// You can find this in your Firebase Console -> Project Settings -> General -> Your Apps
const firebaseConfig = {
  apiKey: "AIzaSyBG5Ni8DODog4XTCacyeSedtWIV_ttwiGQ",
  authDomain: "ninuno-rifebase.firebaseapp.com",
  projectId: "ninuno-rifebase",
  storageBucket: "ninuno-rifebase.firebasestorage.app",
  messagingSenderId: "388093488898",
  appId: "1:388093488898:web:4c22ee318c59825c3c1c1b",
  measurementId: "G-MXKC56D8YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);
