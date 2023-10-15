import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHLQN8_OnITVqHkOfbAc7-fcSmQdIm9Ug",
  authDomain: "drive-cafd9.firebaseapp.com",
  projectId: "drive-cafd9",
  storageBucket: "drive-cafd9.appspot.com",
  messagingSenderId: "401651977679",
  appId: "1:401651977679:web:331e7b9a430c95d20516ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }