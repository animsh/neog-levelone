//ex06: increment score if the right answer
//challenge
//Ask your user if your hometown is Bokaro (or your city) and this time increment a variable based on the right answer.
//Also, console the score this time.

var readlineSync = require("readline-sync");
var score = 0;

var questionOne = "Am I older that 25? y/n: ";
var answerOne = "n";
var questionTwo = "Is my hometome is Surat? y/n: ";
var answerTwo = "y";

var userAnswerOne = readlineSync.question(questionOne);

console.log("Your answer:", userAnswerOne);

if (userAnswerOne === answerOne) {
  console.log("You are right.");
  score += 1;
} else {
  console.log("You are wrong.");
  score -= 1;
}
console.log("Your current Score:", score);

var userAnswerTwo = readlineSync.question(questionTwo);
if (userAnswerTwo === answerTwo) {
  console.log("You are right.");
  score += 1;
} else {
  console.log("You are wrong.");
  score -= 1;
}

console.log("Your current Score:", score);
console.log("Your final score:", score);
