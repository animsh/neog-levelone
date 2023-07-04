//ex10: list grocery items to buy
//challenge
//prepare a list of grocery items to buy.
//add 5 items
//print the first item on the list.
//print the third item on the list.
//print the last item on the list.

let groceryItems = ["pen", "room freshner", "cleaner", "hit", "Naaa"];

for (let groceryItemIndex in groceryItems) {
  if (groceryItemIndex % 2 === 0) {
    console.log(groceryItems[groceryItemIndex]);
  }
}
