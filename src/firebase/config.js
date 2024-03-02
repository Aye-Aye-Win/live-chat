// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp} from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw8Gpva_RpXjjUVdUOntW1e1JWeC2suMY",
  authDomain: "live-chat-793ed.firebaseapp.com",
  databaseURL: "https://live-chat-793ed-default-rtdb.firebaseio.com",
  projectId: "live-chat-793ed",
  storageBucket: "live-chat-793ed.appspot.com",
  messagingSenderId: "707999862994",
  appId: "1:707999862994:web:c42ea9a759a2a37bbf9d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
let auth = getAuth(app);
let timestamp = serverTimestamp;
export {db,auth,timestamp};




