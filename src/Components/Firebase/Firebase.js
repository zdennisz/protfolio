import firebase from "firebase";


  
let firebaseConfig = {
    apiKey: "AIzaSyBVbZekNebMTbk-blmWSgByJE4ta8NFE2o",
    authDomain: "protfolio-36872.firebaseapp.com",
    databaseURL: "https://protfolio-36872-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "protfolio-36872",
    storageBucket: "protfolio-36872.appspot.com",
    messagingSenderId: "938949694524",
    appId: "1:938949694524:web:24128212914988da405f39",
    measurementId: "G-WVH25QMJSB"
  };


  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      //console.error("Firebase initialization error", err.stack);
    }
  }
  // Get a reference to the database service
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;