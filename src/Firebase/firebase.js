import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9-D2nBEoyU8cPnB0GVvFnkqTxYk7p3n0",
    authDomain: "users-d9c16.firebaseapp.com",
    projectId: "users-d9c16",
    storageBucket: "users-d9c16.appspot.com",
    messagingSenderId: "1079873750116",
    appId: "1:1079873750116:web:aaa8bf5ff17d1fe5f44b71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.firestore();

  export default firebase;