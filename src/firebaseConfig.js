
import { initializeApp } from 'firebase/app';
import { getFirestore, /* and maybe other things */ } from 'firebase/firestore';
import { getAuth, /* and maybe other things */ } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {};

// Initialize Firebase

// ... and do the same for other services you need

export const app = initializeApp( firebaseConfig );
export const db = getFirestore(app);
export const auth = getAuth(app);
// ... and do the same for other services you need
