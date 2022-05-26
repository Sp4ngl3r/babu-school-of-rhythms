// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDht_UOV7BDFmDD_kNpD3tVzSgT9b6Os6Q",
  authDomain: "babu-school-of-rhythms-82ac3.firebaseapp.com",
  projectId: "babu-school-of-rhythms-82ac3",
  storageBucket: "babu-school-of-rhythms-82ac3.appspot.com",
  messagingSenderId: "1072609251163",
  appId: "1:1072609251163:web:315c4f530b59a7676e147e",
  measurementId: "G-10J5J9JY5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseStorage = getStorage(app);
const firebaseFirestore = getFirestore(app);

export { firebaseStorage, firebaseFirestore };
