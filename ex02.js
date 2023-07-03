// ex02: read the name of your user
// challenge
// A program to read input from your user. Output this name. Use readlineSync() for this.

// add readlineSync() as a dependency
// import it in your index.js
// know how to read docs and use it. In programming, it is extremely important to read docs.
// use a variable to store this name.
// output this name

var readlineSync = require("readline-sync");

var name = readlineSync.question("Enter your name: ");
console.log(name);
