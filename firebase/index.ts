import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL3NXmKA-gaz4_e0Y4yGzffUy0v3KLG60",
  authDomain: "fir-try-46492.firebaseapp.com",
  projectId: "fir-try-46492",
  storageBucket: "fir-try-46492.appspot.com",
  messagingSenderId: "598005987805",
  appId: "1:598005987805:web:ad1dfdf08e74ce28899e34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
