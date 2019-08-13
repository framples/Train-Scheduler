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

//unsure about the two open columns that we need moment.js to fill - adding variables now in case i need them empty to start
// var nextArrival = "";
// var minutesAway = "";


// on click event to set variables to input on form
$("#add-train").on("click", function (event) {
    event.preventDefault();

    name = $("#inputName").val().trim();
    destination = $("#inputDestination").val().trim();
    firstTrainTime = $("#inputFirst").val().trim();
    frequency = $("#inputFrequency").val().trim();

    dataRef.ref().push({

        name: name,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

dataRef.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().firstTrainTime);
    console.log(childSnapshot.val().frequency);

    var tFrequency = frequency;

    // Time is 3:30 AM
    var firstTime = firstTrainTime;

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


    dataRef.ref().push({


    })



    // code to create a row with saved information from database
    var newRowItem = $("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + "</td></tr>");
    $("#tableOfTrains").append(newRowItem);




});
