// Reference to Firebase database service
var database = firebase.database();

// Initial variables (to first set in Firebase)
var trainNameInput = '';
var destinationInput = '';
var timeInput = '';
var freqInput = '';

// Arrays to hold information locally
var trainNameArray = [];
var destinationArray = [];
var timeArray = [];
var freqArray = [];

// Form entry and append to DOM
$('#train-form').submit(function(event) {
    event.preventDefault();

    // Get inputs locally
    trainNameInput = $('#train-name-input').val().trim();
    destinationInput = $('#destination-input').val().trim();
    timeInput = $('#time-input').val().trim();
    freqInput = $('#freq-input').val().trim();

    // Pushing inputs to local arrays
    trainNameArray.push(trainNameInput);
    destinationArray.push(destinationInput);
    timeArray.push(timeInput);
    freqArray.push(freqInput);

    // Adding data to Firebase
    database.ref().set({
        trainNameInput: trainNameInput, 
        destinationInput: destinationInput, 
        timeInput: timeInput,
        freqInput: freqInput,
        trainNameArrayFB: trainNameArray, 
        destinationArrayFB: destinationArray, 
        timeArrayFB: timeArray,
        freqArrayFB: freqArray
    });    

    // Putting form data into table
    // Creating Table Row
    var tableRow = $('<tr>', {id:'table-row'});
    var col1 = $('<th>', {id:'col1', scope:'row'});
    var col2 = $('<td>', {id:'col2'});
    var col3 = $('<td>', {id:'col3'});
    var col4 = $('<td>', {id:'col4'});
    var col5 = $('<td>', {id:'col5'});

    col1.attr('col1-attr',trainNameInput);
    col1.text(trainNameInput);

    col2.attr('col2-attr',destinationInput);
    col2.text(destinationInput);

    col3.attr('col3-attr',freqInput);
    col3.text(freqInput);

    //col4.attr('col4-attr',freqInput);
    //col4.text(freqInput);

    //col5.attr('col5-attr',trainNameInput);
    //col5.text(trainNameInput);
    
    // Append to Table body
    $('#table-body').append(tableRow);
    tableRow.append(col1, col2, col3, col4, col5);

    // Resetting form upon submit    
    $("#train-form")[0].reset();
});

// Firebase watcher
database.ref().on("value", function(snapshot) {

    // Change the HTML to reflect
    $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().email);
    $("#age-display").text(snapshot.val().age);
    $("#comment-display").text(snapshot.val().comment);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
