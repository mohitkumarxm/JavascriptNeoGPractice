console.log("A2_Exercise_1");
console.log("---- ---- ----");
let book1Quantity = 25;
let book2Quantity = 15;
let book3Quantity = 20;
let book1price = 350;
let book2price = 250;
let book3price = 200;
let book1Value = book1Quantity * book1price;
let book2Value = book2Quantity * book2price;
let book3Value = book3Quantity * book3price;
let totalInventoryValue = book1Value + book2Value + book3Value;

console.log("Indian Bookstore Inventory Report");
console.log("-----------------------------------");
console.log("Book 1: Mahabharata");
console.log(" - Quantity:", book1Quantity);
console.log(" - Price: ₹" + book1price);
console.log(" - Value: ₹" + book1Value + "\n");

console.log("Book 2: Ramayan");
console.log(" - Quantity:", book2Quantity);
console.log(" - Price: ₹" + book2price);
console.log(" - Value: ₹" + book2Value + "\n");

console.log("Book 3: Gitanjali");
console.log(" - Quantity:", book3Quantity);
console.log(" - Price: ₹" + book3price);
console.log(" - Value: ₹" + book3Value + "\n");

console.log("Total Inventory Value: ₹" + totalInventoryValue);
