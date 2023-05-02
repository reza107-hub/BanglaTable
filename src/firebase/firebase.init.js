// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi-T4YCeQzRMnEow_kHaQsyQHUtnctdJk",
    authDomain: "chef-assignment.firebaseapp.com",
    projectId: "chef-assignment",
    storageBucket: "chef-assignment.appspot.com",
    messagingSenderId: "872962005975",
    appId: "1:872962005975:web:77e387db528c37bb808992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app