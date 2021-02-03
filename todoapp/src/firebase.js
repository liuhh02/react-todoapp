import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBR7htFCKdn4z1AmxwQXPa8Tmz-I5DVbI4",
    authDomain: "test-73394.firebaseapp.com",
    projectId: "test-73394",
    storageBucket: "test-73394.appspot.com",
    messagingSenderId: "809436063054",
    appId: "1:809436063054:web:b0937a02f27af9a5072a1f",
    measurementId: "G-WLBM6HYH6V"
  });

const db = firebaseApp.firestore();

export default db;