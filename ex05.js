// ex05: print right/wrong if greater than 25
// challenge
// Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.
var readlineSync = require("readline-sync");

var userAge = readlineSync.question("Am I older that 25? y/n: ");

console.log("Your answer:", userAge);

if (userAge === "y") {
  console.log("You are wrong.");
} else {
  console.log("You are right.");
}
