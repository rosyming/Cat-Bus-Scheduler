# Firebase-Train-Scheduler
GATech Coding Bootcamp Homework: 7. Firebase Assignment - Train Scheduler

This is the README file for the GATech Coding Bootcamp Homework: Firebase Assignment making a Train Scheduler.

Application Title: Catbus Schedule

Website: https://rosyming.github.io/Firebase-Train-Scheduler/

GitHub Repository: https://github.com/rosyming/Firebase-Train-Scheduler

Firebase: https://train-scheduler-2b808.firebaseio.com/

Last updated: 10/01/18

Author: Mary Nguyen

Technology stack and web development techniques: HTML, CSS, Bootstrap, JavaScript, JQuery, Ajax, Firebase, Moment.js library

What is this project: This project is a homework assignment for the GATech Coding Bootcamp for the Firebase Unit/Module. Even though the homework refers to trains, the app has been themed for buses.

About this project: This is a bus schedule application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates this information with Moment.js. This website provides up-to-date information about various buses, namely their arrival times and how many minutes remain until they arrive at their station.

For the first time in class, this project uses a database (Firebase) to write and retrieve multiple user input data so that all users can see what has been entered.  Additionally, JavaScript and JQuery is used to change the HTML of the site, push data to the database and "listen" for new data that has been added so that a snapshot can be created of the database at that moment.  Finally, the project uses a new library called Moment.js to "Parse, validate, manipulate, and display dates and times in JavaScript" (https://momentjs.com/).  This helped with the calculation of the Arrival Times and Minutes Away.

Instructions: The theme of this project is based upon Catbus.  Catbus is a character in the Studio Ghibli film My Neighbor Totoro by Hayao Miyazaki. This simple sample app captures the Catbus schedule, destination, frequency of departures, and arrival times.  Users enter in their Bus Name (free text), Destination City (free text), the First Bus time of the day (Format is in 24-hour military time with data validation in the field for the precise format), and finally the Frequency of arrivals (minutes in number format).  Once the information is entered, users can either click "Submit" or hit the Enter key.

From there, the user input data gets saved to the database. The "Next Arrival" times and "Minutes Away" is calculated based upon the "First Bus Time", the "Frequency", and the current time.  The results of this is displayed in the Current Bus Schedule card (using Moment.js).  As other users enter in the data, the Current Bus Schedule card is updated based upon the current snapshot of the database so that everyone is able to see all buses and their corresponding information.

This application is also responsive with a bottom scroll bar appearing at the bottom of the table when the screen is too small.
