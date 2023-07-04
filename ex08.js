//ex08: function to check the answer
//challenge
//Your function should take a question and the right answer.
//Ask your user to answer the question.
//check the answer and increment score (global variable)
//tell your user whether the answer was correct or not

var readlineSync = require("readline-sync");
var globalScore = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toLowerCase() === answer.toLowerCase()) {
    console.log("Your answer is right.");
    globalScore++;
  } else {
    console.log("Your answer is wrong.");
    globalScore--;
  }
  console.log("Current Score:", globalScore);
}

play("In which company I am currently working?", "Microsoft");
play("In which city I am currently setteled?", "Pune");
console.log("Final Score:", globalScore);
