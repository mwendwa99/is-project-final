// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcLdTbpqV83OofOca9z3EtKj7vdrtqsFw",
    authDomain: "save-a-spot-336107.firebaseapp.com",
    projectId: "save-a-spot-336107",
    storageBucket: "save-a-spot-336107.appspot.com",
    messagingSenderId: "434735491935",
    appId: "1:434735491935:web:6322541b08ea4486f1e4ea",
    measurementId: "G-JW2VEVCVJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };