// import { initializeApp } from 'firebase/app';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2YHOOZ7lP-YTN25fNoKI0gkDSRfkmBx4",
  authDomain: "scholar-sheep-311ea.firebaseapp.com",
  projectId: "scholar-sheep-311ea",
  storageBucket: "scholar-sheep-311ea.appspot.com",
  messagingSenderId: "62402388927",
  appId: "1:62402388927:web:577446e851f387fc98f70a",
  measurementId: "G-KMZLD5QSPY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export default app
export  const auth = getAuth(app);


