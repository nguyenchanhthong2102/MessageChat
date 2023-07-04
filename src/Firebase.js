// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWV7-54zVencj0QXVQZxLiQUJSrctfQic",
  authDomain: "chat-app-342a8.firebaseapp.com",
  projectId: "chat-app-342a8",
  storageBucket: "chat-app-342a8.appspot.com",
  messagingSenderId: "787454092784",
  appId: "1:787454092784:web:b96787304b99e797442935",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
// Initialize Firebase
