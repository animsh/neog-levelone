// ex04: do it all together
// challenge
// A program to take your user's name. Then welcome them.

var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hey, what is your name?");
var greetingMessage = "Namaste, " + userName;

console.log(greetingMessage);
