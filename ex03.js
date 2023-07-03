// ex03: welcome your user
// challenge
// A program to take a string. And add "Welcome" to it. Then console it.

var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hey, whats your name? ");
var greetingMessage = "Welcome " + userName;
console.log(greetingMessage);
