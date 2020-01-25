import firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA4ga3iK6nrxctOeGSbLdTCnKz0gOMI-co",
    authDomain: "socialloginspringboot.firebaseapp.com",
    databaseURL: "https://socialloginspringboot.firebaseio.com",
    projectId: "socialloginspringboot",
    storageBucket: "socialloginspringboot.appspot.com",
    messagingSenderId: "959388190902",
    appId: "1:959388190902:web:f5bfbedd0eb594fc04fe17",
    measurementId: "G-NZMTRRXW01"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth()
  var googleauthprovider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  export {
        auth,
        googleauthprovider,
        fbProvider,
  }