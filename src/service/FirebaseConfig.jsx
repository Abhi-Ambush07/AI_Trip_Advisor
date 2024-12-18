// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGW7IVfKWHbqH0g9L2VyXNtuW-HcL-ZYs",
  authDomain: "ai-travel-planner-5997c.firebaseapp.com",
  projectId: "ai-travel-planner-5997c",
  storageBucket: "ai-travel-planner-5997c.firebasestorage.app",
  messagingSenderId: "7676368361",
  appId: "1:7676368361:web:7e2c273c00f08fcff0a778",
  measurementId: "G-RP1FG8VWJV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);