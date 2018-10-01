// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCAhIuT-M_3CEyeBeSSuur65Y0hJsZduCw',
    authDomain: 'train-scheduler-2b808.firebaseapp.com',
    databaseURL: 'https://train-scheduler-2b808.firebaseio.com',
    projectId: 'train-scheduler-2b808',
    storageBucket: 'train-scheduler-2b808.appspot.com',
    messagingSenderId: '262304376221'
  };
  firebase.initializeApp(config);

// Reference to Firebase database service
var database = firebase.database();

$(document).ready(function(){

// Function to create and append table row
function createTableRow(trainNameInput, destinationInput, freqInput, nextArrival, minAway) {
    // Creating Table Row
    var tableRow = $('<tr>', {id:'table-row'});
    var col1 = $('<th>', {id:'col1', scope:'row'});
    var col2 = $('<td>', {id:'col2'});
    var col3 = $('<td>', {id:'col3'});
    var col4 = $('<td>', {id:'col4'});
    var col5 = $('<td>', {id:'col5'});
       
    // Adding data and attributes to table row
    col1.attr('col1-attr', trainNameInput);
    col1.text(trainNameInput);

    col2.attr('col2-attr', destinationInput);
    col2.text(destinationInput);

    col3.attr('col3-attr', freqInput);
    col3.text(freqInput);

    col4.attr('col4-attr', nextArrival);
    col4.text(nextArrival);

    col5.attr('col5-attr', minAway);
    col5.text(minAway + ' min');

    // Append to Table Row to body
    $('#table-body').append(tableRow);
    tableRow.append(col1, col2, col3, col4, col5);
}

// User inputs/Form entry and append to DOM
$('#train-form').submit(function(event) {
    event.preventDefault();

    // Grabs user inputs 
    var trainNameInput = $('#train-name-input').val().trim();
    var destinationInput = $('#destination-input').val().trim();
    var timeInput = $('#time-input').val().trim();
    var freqInput = $('#freq-input').val().trim();

    // Local temp object to hold train data
    var newTrain = {
        name: trainNameInput,
        destination: destinationInput,
        time: timeInput,
        freq: freqInput
    };

    // Adding data to Firebase
    database.ref().push(newTrain);

    // Making sure input loaded correctly
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.freq);

   // Resetting form upon submit    
   $('#train-form')[0].reset();
});

// Firebase watcher
database.ref().on('child_added', function(snapshot) {
    console.log(snapshot.val());

    // Storing input into variable
    var trainNameInput = snapshot.val().name;
    var destinationInput = snapshot.val().destination;
    var timeInput = snapshot.val().time;
    var freqInput = snapshot.val().freq;

    // Train info
    console.log(trainNameInput);
    console.log(destinationInput);
    console.log(timeInput);
    console.log(freqInput);
    

    // Moment JS
    // Moment JS conversions
    var timeInputConverted = moment(timeInput, 'HH:mm').subtract(1, 'years');
    console.log(timeInputConverted);
    
    // Current Time
    var currentTime = moment().format('HH:mm');
    console.log('CURRENT TIME: ' + currentTime);

    // Difference between current time and first train times
    var diffTime = moment().diff(timeInputConverted, 'minutes');
    console.log('DIFFERENCE IN TIME: ' + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % freqInput;
    console.log('Remainder: ' + tRemainder);

    // Minute Away
    var minAway = freqInput - tRemainder;
    console.log('MINUTES TILL TRAIN: ' + minAway);

    // Next Train
    var nextArrival = moment().add(minAway, 'minutes').format('hh:mm A');
    console.log('ARRIVAL TIME: ' + nextArrival);

    
    // Running function to add input data to table
    createTableRow(trainNameInput, destinationInput, freqInput, nextArrival, minAway);
});

});
    



    