// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {getFirestore, setDoc,doc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_815fTtS6UTOgHwHXvzL_hfx0UlzQKJQ",
  authDomain: "login-form-6ec24.firebaseapp.com",
  projectId: "login-form-6ec24",
  storageBucket: "login-form-6ec24.appspot.com",
  messagingSenderId: "412069399031",
  appId: "1:412069399031:web:8b3e466dc9a49f46a886f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function showMessage(message,divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
}

const signUp=document.getElementById("submitSignUp");
signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById("email").value;
    const password = document.getElementById('password').value;
    const uname=document.getElementById('uname').value;
    const number=document.getElementById('num').value;
    const auth=getAuth();//Gets the authentication instance from Firebase.
    const db=getFirestore();//Gets the Firestore database instance from Firebase.
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email:email,
            uname:uname,

        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db,'users',user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='index.html';//connect html
        })
        .catch((err)=>{
            console.log("error writing document", err);
        });

    })
    .catch((err)=>{
        const errorCode =err.code;
        if(errorCode == 'auth/email-already-in-use'){
            showMessage('Email address already Exist !','signUpMessage');
        }
        else{
            showMessage('unable to create user', 'signUpMessage');
        }
    })

});