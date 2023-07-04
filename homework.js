//homework: star pattern
//challenge
//a program to take input number from user and print stars like this. The below pattern will be printed when the user enters 5.

let stars = "*";
for (let i = 1; i < 6; i++) {
  console.log(stars);
  stars += "*";
}

for (let i = 5; i > 0; i--) {
  stars = stars.substring(0, i);
  console.log(stars);
}
