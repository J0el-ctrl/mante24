// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;


// cuando se crea con cra y no en vite no funka
// apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId:process.env.REACT_APP_FIREBASE_APP_ID,

// en global archivo  .env.local
// REACT_APP_FIREBASE_API_KEY=AIzaSyCLBRE1gX409ZA7g9s4IJVO267n4gN8cIk
// REACT_APP_FIREBASE_AUTH_DOMAIN=maintenance-fire9.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=maintenance-fire9
// REACT_APP_FIREBASE_STORAGE_BUCKET=maintenance-fire9.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=771581955941
// REACT_APP_FIREBASE_APP_ID=1:771581955941:web:f77f0ffd1c9c48deac9b8c"
