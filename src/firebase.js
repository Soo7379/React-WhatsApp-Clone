import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp7BWXdmXFicCEjymn2oK2KgHhEdkrwLA",
  authDomain: "react-whatsapp-9720d.firebaseapp.com",
  databaseURL: "https://react-whatsapp-9720d.firebaseio.com",
  projectId: "react-whatsapp-9720d",
  storageBucket: "react-whatsapp-9720d.appspot.com",
  messagingSenderId: "727827241010",
  appId: "1:727827241010:web:20b7ea8ef9b0705083442b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
