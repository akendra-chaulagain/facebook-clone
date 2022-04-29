import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "facebook-clone-47f47.firebaseapp.com",
  projectId: "facebook-clone-47f47",
  storageBucket: "facebook-clone-47f47.appspot.com",
  messagingSenderId: "978314542456",
  appId: "1:978314542456:web:1d3a774014e7db53501c8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
