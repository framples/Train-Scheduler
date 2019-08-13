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
var destination = "";
var firstTrainTime = "";
var frequency = "";


// on click event to set variables to input on form
$("#add-train").on("click", function (event) {
    event.preventDefault();

    name = $("#inputName").val().trim();
    destination = $("#inputDestination").val().trim();
    firstTrainTime = $("#inputFirst").val().trim();
    frequency = $("#inputFrequency").val().trim();

    dataRef.ref().push({


    })


})