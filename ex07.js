//ex07: function to add two numbers
//challenge
//Take two numbers and add them. Put this entire thing in a function add() and return the result
var readlineSync = require("readline-sync");

function add(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number")
    return "inputs should be in numeric format";
  return firstNumber + secondNumber;
}

function prod(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number")
    return "inputs should be in numeric format";
  return firstNumber * secondNumber;
}

var firstNumber = readlineSync.questionInt("Enter first number:");
var secondNumber = readlineSync.questionInt("Enter first number:");

var addition = add(firstNumber, secondNumber);
var product = prod(firstNumber, secondNumber);
console.log("Addition:", addition);
console.log("Product:", product);
