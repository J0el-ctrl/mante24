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
// apiKey: import.meta.env.VITE_APP_APIKEY, 
// authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
// projectId: import.meta.env.VITE_APP_PROJECTID,
// storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
// messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
// appId: import.meta.env.VITE_APP_APPID

// en global archivo  .env.local
// VITE_APP_APIKEY=
// VITE_APP_AUTHDOMAIN=
// VITE_APP_PROJECTID=
// VITE_APP_STORAGEBUCKET=
// VITE_APP_MESSAGINGSENDERID=
// VITE_APP_APPID=