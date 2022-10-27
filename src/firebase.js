import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-jM3EQD36ML8ivSLU3zVQvnUT5dTAXmQ",
  authDomain: "app-83068.firebaseapp.com",
  projectId: "app-83068",
  storageBucket: "app-83068.appspot.com",
  messagingSenderId: "96683647017",
  appId: "1:96683647017:web:68192b5503273f7f0d3c38",
  measurementId: "G-D95Y94LCWB"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export{db,auth};



  
  