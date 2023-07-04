//ex12: club info about a superhero together
//exercise
//Create two objects and put information about two superheros: superman and batman. Get familiarity with the syntax. Read and understand what's written in understanding section.

let superman = {
  realName: "Clark Kent",
  type: "Alien",
  costumeColor: "red-blue",
  strength: 100,
  stealth: 0,
};

let batman = {
  realName: "Bruse Wayne",
  type: "Human",
  costumeColor: "black",
  strength: 100,
  stealth: 100,
};

console.log(superman);
console.log(batman);

console.log(superman.stealth);
console.log(batman.stealth);

console.log(superman.stealth > batman.stealth);

let superheros = [superman, batman];
for (let superhero of superheros) {
  console.log(superhero.realName, superhero.costumeColor);
}
