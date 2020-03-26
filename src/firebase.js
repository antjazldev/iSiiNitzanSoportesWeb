import * as firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCpRvbzFSVSHd7f70Ph13I3l1q8c4f4cfM",
    authDomain: "login-soportes.firebaseapp.com",
    databaseURL: "https://login-soportes.firebaseio.com",
    projectId: "login-soportes",
    storageBucket: "login-soportes.appspot.com",
    messagingSenderId: "1025415410705",
    appId: "1:1025415410705:web:8c190a119186152b09adb0",
    measurementId: "G-57X4YWPS0W"
  };
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  export {app};
  let db = app.database();
  export {db};
  let servsRef = db.ref('servicios');
  export {servsRef};
  let fincasRef = db.ref('Fincas');
  export {fincasRef};