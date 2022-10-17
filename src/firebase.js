import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-XrIOVPWTv77Hnkfvs_jq1ib76P-U0m4",
  authDomain: "whatsapp-mern-f33a3.firebaseapp.com",
  projectId: "whatsapp-mern-f33a3",
  storageBucket: "whatsapp-mern-f33a3.appspot.com",
  messagingSenderId: "793342333988",
  appId: "1:793342333988:web:1287d9f59fe330f6f0b4b1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
