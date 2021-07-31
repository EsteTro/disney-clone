import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAT1bc2H54EOz-f8bl4uF1elJFFWsiIadQ",
  authDomain: "disney-clone-48435.firebaseapp.com",
  projectId: "disney-clone-48435",
  storageBucket: "disney-clone-48435.appspot.com",
  messagingSenderId: "852868079959",
  appId: "1:852868079959:web:26b5bd17da83c01a6c9e12",
  measurementId: "G-5N3CV43P3Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
