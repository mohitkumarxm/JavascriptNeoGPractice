console.log("A3.1_HW_2");
console.log("---- ---- ----");

console.log("1.1");
let age = 15;
let isAdult = true;
if (isAdult) {
  console.log("Adult");
}
console.log("Age:", age);
console.log("---- ---- ----");

console.log("1.2");
let passengerAge = 65;
let originalTicketPrice = 150;
if (passengerAge > 60) {
  originalTicketPrice = originalTicketPrice - (originalTicketPrice / 100) * 15;
  console.log("Ticket Price for age greater than 60: ₹", originalTicketPrice);
} else {
  console.log("Ticket Price for age less than 60: ₹", originalTicketPrice);
}
console.log("---- ---- ----");

console.log("1.3");
let score1 = 85;
let score2 = 90;
let score3 = 78;
if (score2 > score1 && score2 > score3) {
  console.log("Student 2 has the highest score:", score2);
} else {
  console.log("Student 2 does not have the highest score");
}
console.log("---- ---- ----");
console.log("1.4");
let item1 = "Mobile Phone";
let item2 = "Headphones";
let item3 = "Laptop";
let item4 = "Smartwatch";
let price1 = 15000;
let price2 = 2500;
let price3 = 45000;
let price4 = 8000;
let totalCartPrice = price1 + price2 + price3 + price4;
let deliveryChargeStatus = "";
if (totalCartPrice < 1999) {
  let deliveryCharge = 99;
  totalCartPrice = totalCartPrice + deliveryCharge;
  deliveryChargeStatus = "Optional Delivery Charge: " + deliveryCharge;
} else {
  deliveryChargeStatus = "No Delivery Charge";
}
console.log("***Shopping Cart Summary***");
console.log("-----------------------------------");
console.log("Item:", item1, "Price: ₹" + price1);
console.log("Item:", item2, "Price: ₹" + price2);
console.log("Item:", item3, "Price: ₹" + price3);
console.log("Item:", item4, "Price: ₹" + price4);
console.log("-----------------------------------");
console.log("Total Cart Price: ₹" + totalCartPrice);
console.log("Delivery Charges:", deliveryChargeStatus);
