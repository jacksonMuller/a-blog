
import { initializeApp } from 'firebase/app';
import { getFirestore, /* and maybe other things */ } from 'firebase/firestore';
import { getAuth, /* and maybe other things */ } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmqouj0i_FP4zhBTGjSnarhqKsZ_SBuTg",
  authDomain: "blog-a1ff0.firebaseapp.com",
  projectId: "blog-a1ff0",
  storageBucket: "blog-a1ff0.appspot.com",
  messagingSenderId: "583505844754",
  appId: "1:583505844754:web:4d454dbdad11d276e556cb"
};

// Initialize Firebase

// ... and do the same for other services you need

export const app = initializeApp( firebaseConfig );
export const db = getFirestore(app);
export const auth = getAuth(app);
// ... and do the same for other services you need