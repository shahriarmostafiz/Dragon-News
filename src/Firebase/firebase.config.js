// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjh6lSjyqcj9B3gVAjS4pQcbfyHVmPhfs",
  authDomain: "dragon-news-3631f.firebaseapp.com",
  projectId: "dragon-news-3631f",
  storageBucket: "dragon-news-3631f.appspot.com",
  messagingSenderId: "15155287723",
  appId: "1:15155287723:web:818b1998588c0e5a6b09ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
