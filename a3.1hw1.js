console.log("A3.1_HW_1");
console.log("---- ---- ----");

console.log("1.1");
let age = 18;
let isAdult = false;
if (isAdult) {
  console.log("Not an Adult");
}
console.log("Age:", age);
console.log("---- ---- ----");

console.log("1.2");
let customerAge = 18;
let baseTicketPrice = 200;
if (customerAge <= 18) {
  baseTicketPrice = baseTicketPrice - (baseTicketPrice / 100) * 20;
  console.log(
    "Ticket Price for age less than or equal to 18: ₹",
    baseTicketPrice
  );
} else {
  console.log("Ticket Price: ₹", baseTicketPrice);
}
console.log("---- ---- ----");

console.log("1.3");
let num1 = 25;
let num2 = 50;
let num3 = 20;
if (num3 < num1 && num3 < num2) {
  console.log("The third number,", num3, "is the smallest.");
} else {
  console.log("The third number,", num3, "is not the smallest.");
}
console.log("---- ---- ----");

console.log("1.4");
let book1 = "Harry Potter and the Sorcerer's Stone";
let book2 = "The Great Gatsby";
let book3 = "To Kill a Mocking Bird";
let book4 = "The Lord of the Rings";
let price1 = 400;
let price2 = 300;
let price3 = 250;
let price4 = 500;
let totalCartPrice = price1 + price2 + price3 + price4;
let deliveryChargeStatus = "";
if (totalCartPrice < 799) {
  let deliveryCharge = 50;
  totalCartPrice = totalCartPrice + deliveryCharge;
  deliveryChargeStatus = "Optional Delivery Charge: " + deliveryCharge;
} else {
  deliveryChargeStatus = "No Delivery Charge";
}
console.log("***Bookstore Shopping Cart Summary***");
console.log("-----------------------------------");
console.log("Book1:", book1, "Price: ₹" + price1);
console.log("Book2:", book2, "Price: ₹" + price2);
console.log("Book3:", book3, "Price: ₹" + price3);
console.log("Book4:", book4, "Price: ₹" + price4);
console.log("-----------------------------------");
console.log("Total Cart Price: ₹" + totalCartPrice);
console.log("Delivery Charges:", deliveryChargeStatus);
