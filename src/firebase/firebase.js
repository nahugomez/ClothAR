import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsOmUBViMFOQs45p---HiiZzTTQGV-tq4",
  authDomain: "clothar-reactjs.firebaseapp.com",
  projectId: "clothar-reactjs",
  storageBucket: "clothar-reactjs.appspot.com",
  messagingSenderId: "572936890882",
  appId: "1:572936890882:web:9fcf31eae3fffc8428151b"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);