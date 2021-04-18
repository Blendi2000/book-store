import firebase from 'firebase'
require ("firebase/firestore");

var config = {
    apiKey: "AIzaSyCIBk9KP1Qug6jHnjEJ8xavnHNVE50dQH0",
    authDomain: "book-store-7d7b5.firebaseapp.com",
    databaseUrl:'https://book-store-7d7b5-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: "book-store-7d7b5",
    storageBucket: "book-store-7d7b5.appspot.com",
    messagingSenderId: "376036731901",
    appId: "1:376036731901:web:033060b06eae6552390794"
  };
  
  const fb = firebase.initializeApp(config);
  const db = firebase.firestore();
  export {fb,db}
  // Initialize Firebase
  //export const fb = firebase.initializeApp(firebaseConfig);
