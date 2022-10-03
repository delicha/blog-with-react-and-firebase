import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1230LPno03ZjIYemtqfiGAvrQ2G7esMM",
  authDomain: "blog-with-react-and-fire-3b07a.firebaseapp.com",
  projectId: "blog-with-react-and-fire-3b07a",
  storageBucket: "blog-with-react-and-fire-3b07a.appspot.com",
  messagingSenderId: "417413959856",
  appId: "1:417413959856:web:8fd73290795cdf47aa6b75"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
