// firebase information to connet to server
var firebaseConfig = {
    apiKey: "AIzaSyDi-EdArtSeaDWZAEpFNmL4h-WujWK3aNA",
    authDomain: "project-08032019.firebaseapp.com",
    databaseURL: "https://project-08032019.firebaseio.com",
    projectId: "project-08032019",
    storageBucket: "project-08032019.appspot.com",
    messagingSenderId: "245568956678",
    appId: "1:245568956678:web:8695ba8afe22aac3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var dataRef = firebase.database();

  // setting form initial values to empty

  var name = "";
  var destionation = "";
  var firstTrainTime = "";
  var frequency = "";

  