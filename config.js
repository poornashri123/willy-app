import * firebase from 'firebase';
require('*firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyCOXvmDnqOXi8RT2idICAsVg1JKOXZvsnE",
    authDomain: "willy-app-dbf22.firebaseapp.com",
    databaseURL: "https://willy-app-dbf22.firebaseio.com",
    projectId: "willy-app-dbf22",
    storageBucket: "willy-app-dbf22.appspot.com",
    messagingSenderId: "1058551090357",
    appId: "1:1058551090357:web:e2171379c388cf29e402fc"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.fireStore()