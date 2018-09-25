// Reference to Firebase database service
var database = firebase.database();

// Initial variables (to first set in Firebase)
var trainNameInput = '';
var destinationInput = '';
var timeInput = '';
var freqInput = '';

// Initial local arrays to hold information 
var trainNameArray = [];
var destinationArray = [];
var timeArray = [];
var freqArray = [];

// Function to create Table Row and add data to table
function createTableRow() {
    // Creating Table Row
    var tableRow = $('<tr>', {id:'table-row'});
    var col1 = $('<th>', {id:'col1', scope:'row'});
    var col2 = $('<td>', {id:'col2'});
    var col3 = $('<td>', {id:'col3'});
    var col4 = $('<td>', {id:'col4'});
    var col5 = $('<td>', {id:'col5'});
   
    // Adding data and attributes to table row
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

    // Append to Table Row to body
    $('#table-body').append(tableRow);
    tableRow.append(col1, col2, col3, col4, col5);
}


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

    // Running function to add input data to table
    createTableRow();

    // Resetting form upon submit    
    $("#train-form")[0].reset();
});


// Firebase watcher (NEED TO BUILD OUT. THIS IS SAMPLE CODE)
database.ref().on("value", function(snapshot) {

    // Clearing the Table Body
    //$('#table-body').empty();

    // Console.log snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().trainNameArrayFB[0]);
    console.log(snapshot.val().trainNameArrayFB);
    console.log(snapshot.val().trainNameArrayFB.length);


    // Creating for loop to loop through arrays in Firebase to load new information
    for (var i = 0; i < snapshot.val().trainNameArrayFB.length; i++) {

        console.log(snapshot.val().trainNameArrayFB[i]);
        console.log(trainNameInput);

        // Pulling snapshot of array data from Firebase
        trainNameInput = $('#train-name-input').text(snapshot.val().trainNameArrayFB[i]);
        destinationInput = $('#destination-input').text(snapshot.val().destinationArrayFB[i]);
        timeInput = $('#time-input').text(snapshot.val().timeArrayFB[i]);
        freqInput = $('#freq-input').text(snapshot.val().freqArrayFB[i]);
    
        // Running function to add Firebase snapshot data to table
        createTableRow();    
    }

    // Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
}); 

