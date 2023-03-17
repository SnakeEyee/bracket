// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX7jfHJTAQ3IrLiG5zZsbJl-uNNwNl-MM",
  authDomain: "bracket-form.firebaseapp.com",
  projectId: "bracket-form",
  storageBucket: "bracket-form.appspot.com",
  messagingSenderId: "516526033242",
  appId: "1:516526033242:web:29a140641e98462ecd4b63",
  measurementId: "G-KK23X7F3LQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
