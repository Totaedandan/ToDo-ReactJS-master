

  // import { firebase } from '@firebase/app';

import firebase from "firebase";
// require('@firebase/auth');
// require('@firebase/firestore');
// var firebase = require('firebase/app');




var config = {
  apiKey: "AIzaSyAZLJf3I2u8jVYmMLHkQb2Lkotkqy-VBUE",
  authDomain: "todo-app-cp-ddd08.firebaseapp.com",
  databaseURL: "https://todo-app-cp-ddd08.firebaseio.com",
  projectId: "todo-app-cp-ddd08",
  storageBucket: "todo-app-cp-ddd08.appspot.com",
  messagingSenderId: "543215475383",
  appId: "1:543215475383:web:20b91ada451a27c30c4b32",
  measurementId: "G-6TS65VNLTC"

};

var firebaseApp = firebase.initializeApp(config);;

const db = firebaseApp.firestore();

export default db;
