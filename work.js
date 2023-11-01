                 /* These question are from fazzyA repo Javascript-ES6-Excercises-Function */

                        /*****************Question 1****************/

// (Q1) Write a program that returns your age in days. (take age as an input) 

 var ageInYears = prompt("Please enter your age:");
ageInYears = parseFloat(ageInYears);
var ageInDays = ageInYears * 365; // Assuming an average year has 365 days
document.write("Your age in days is approximately " + ageInDays + " days." ); 

                           /*****************Question 2****************/

/* Q(2) Create a function that takes a number as an argument,
increments the number by +1 and returns the result. (take number as an input)*/

 function incrementNumber(inputNumber) {
    var result = inputNumber + 1;
    return result;
}
var inputNumber = parseFloat(prompt("Please enter a number:"));
var incrementedNumber = incrementNumber(inputNumber);
document.write("The incremented number is: " + incrementedNumber + "." );

                            /*****************Question 3****************/

// Q(3) Create a function that takes a number as an argument, decrements the number by -1 and returns the result.

function decrementNumber(inputNumber) {
    var result = inputNumber - 1;
    return result;
  }
  var inputNumber = parseFloat(prompt("Please enter a number:"));
  var decrementedNumber = decrementNumber(inputNumber);
  document.write("The decremented number is: " + decrementedNumber + "." );

                            /*****************Question 4****************/

// Q(4) Create a function that takes a number and return square of a number

function squareNumber(inputNumber) {
    var result = inputNumber * inputNumber;
    return result;
  }
  var inputNumber = parseFloat(prompt("Please enter a number:"));
  var squaredNumber = squareNumber(inputNumber);
  document.write("The square of the number is: " + squaredNumber + "." );

                          /*****************Question 5****************/

// Q(5) Create a function that tells current time in Y-m-d format.

  function getCurrentTimeInYMDFormat() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedTime = `${year}-${month}-${day}`;
    return formattedTime;
}
const currentYMDTime = getCurrentTimeInYMDFormat();
document.write( "The current time in Y-M-D format is: " + currentYMDTime + ".");

                          /*****************Question 6****************/

// Q(6) Create a function that tells current time from Date object in H:i:s format

function getCurrentTimeInHisFormat() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
}
const currentTimeHis = getCurrentTimeInHisFormat();
document.write( " the current time in H:i:s format is:" + currentTimeHis + "."); 




  
  


