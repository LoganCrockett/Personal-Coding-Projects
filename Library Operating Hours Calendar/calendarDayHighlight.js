/*
    Created by: Logan Crockett
    On: 8/21/20
    Purpose: To get the day of the week, and then highlight the appropriate table row in calendar.html
*/

var currentDate = new Date();//Create a new date object
var currentDay;//Will hold what day of the week it is

//Initialize the data here
function init() {
   displayDate();//Update the table to highlight what day it is
}

//Based on the currentDay, we will change how we style the table
function displayDate() {
  currentDay = currentDate.getDay();
  /*
    Format is:
    0:Sunday
    1:Monday
    2:Tuesday
    3:Wednesday
    4:Thursday
    5:Friday
    6:Saturday
  */
  var idDay;//Used to hold which ID we will manipulate
  //Set the variable equal to the correct day
  switch (currentDay) {
    case 0: idDay = "sunday";break;
    case 1: idDay = "monday";break;
    case 2: idDay="tuesday";break;
    case 3: idDay = "wednesday";break;
    case 4: idDay = "thursday";break;
    case 5: idDay = "friday";break;
    case 6: idDay = "saturday";break;
    default: console.log("Unable to get the date");break;
  }
  
  //console.log(idDay);For debugging purposes
  
  //Now we cahnge the CSS of the table row
  document.getElementById(idDay).style = "background-color: lightgoldenrodyellow";
  return;
}