import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoyvpJz-t-UEJb6BJCmnlI0CAfTC6z2FM",
    authDomain: "twitter-clone-79c4f.firebaseapp.com",
    projectId: "twitter-clone-79c4f",
    storageBucket: "twitter-clone-79c4f.appspot.com",
    messagingSenderId: "195140209339",
    appId: "1:195140209339:web:27b33d4225e521dbb0379e",
    measurementId: "G-4YJ0Z5E98E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;