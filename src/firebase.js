import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdomkLFWHEAGNcm7Xn25pnH7r72QrNJFk",
  authDomain: "disneyplus-clone-14e86.firebaseapp.com",
  projectId: "disneyplus-clone-14e86",
  storageBucket: "disneyplus-clone-14e86.appspot.com",
  messagingSenderId: "48418174912",
  appId: "1:48418174912:web:41d46f94093c48ac9afa25",
  measurementId: "G-H52CVLDMSQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
