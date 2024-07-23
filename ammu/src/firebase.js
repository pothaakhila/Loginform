/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";*/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBMghAxhqdWPnHDS2XUJkBBZdOhomrRNI",
  authDomain: "auth-b2aac.firebaseapp.com",
  projectId: "auth-b2aac",
  storageBucket: "auth-b2aac.appspot.com",
  messagingSenderId: "407315649952",
  appId: "1:407315649952:web:d5c83d7bb5bd2102ab80c5"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


///const auth = getAuth(app);
//const db = getFirestore(app);

//export { auth, db };
const auth = getAuth(app);

export { auth };