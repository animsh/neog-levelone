//ex14: club everything to make the game
//challenge
//use question list
//and function to put together a quiz

let readlineSync = require("readline-sync");
let score = 0;

function createQuestion(question, answer) {
  return {
    question,
    answer,
  };
}

function play(question, answer) {
  let userAnswer = readlineSync.question(question);

  userAnswer === answer
    ? console.log("You are right", "Score:", ++score)
    : console.log("You are wrong", "Score:", --score);

  console.log("----------");
}

let userName = readlineSync.question("What is your name? ");
console.log("Welcome", userName, "Do you know Tanay?");

let questions = [
  createQuestion("Where do Tanay lives? ", "Bangalore"),
  createQuestion("Name the company where Tanay works? ", "Microsoft"),
];

for (let currentQuestion of questions) {
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Final Score:", score);
