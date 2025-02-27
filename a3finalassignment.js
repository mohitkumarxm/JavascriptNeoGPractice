console.log("A3_FinalAssignment");
console.log("---- ---- ----");

let salary = 50000;
let sidehustle = 10000;
let groceries = 5000;
let utilities = 2000;
let rent = 20000;
let transportation = 3000;

let totalIncome = 50000 + 10000;
let totalExpenses = groceries + utilities + rent + transportation;
let budgetSurplusDeficit = totalIncome - totalExpenses;

let budgetStatus = "";
if (budgetSurplusDeficit >= 0) {
  budgetStatus = "Congratulations! You have a budget surplus.";
} else if (budgetSurplusDeficit < 0) {
  budgetStatus =
    "Oops! You have a budget deficit. Consider reducing expenses or increasing income.";
}

let spendingInsights = "";
if (totalExpenses <= 10000) {
  spendingInsights = "Great job! You have maintained a low expense level.";
} else if (totalExpenses > 10000 && totalExpenses <= 20000) {
  spendingInsights =
    "Your Expenses are moderate. Look for the opportunity to reduce unnecessray spending.";
} else if (totalExpenses > 20000 && totalExpenses <= 30000) {
  spendingInsights =
    "Your Expenses are on the higher side. Consider creating a more detailed budget to manage your spending.";
} else {
  spendingInsights =
    "Your Expenses are quite high. It is essential ti analyze your spending habits and make necessary adjustments.";
}

let budgetTips = "";
if (budgetSurplusDeficit >= 10000) {
  budgetTips =
    "You have asignificant budget surplus. Consider allocating the surplus towards savings and debt repayment.";
} else if (budgetSurplusDeficit >= -10000 && budgetSurplusDeficit < 10000) {
  budgetTips =
    "Your budget is relatively balanced. Focus on mainting your current financial habits.";
} else {
  budgetTips =
    "You have a budget deficit. Evaluate your expenses and identify areas where you can cut back.";
}

console.log("Monthly Budget Analysis Report");
console.log("--------------------------------");
console.log("Total Income: ₹" + totalIncome);
console.log("Total Expenses: ₹" + totalExpenses);
console.log("Budget Surplus/Deficit: ₹" + budgetSurplusDeficit, "\n");
console.log("Budget Status: " + budgetStatus + "\n");
console.log("Budget Insights:\n" + spendingInsights + "\n");
console.log("Budget Management Tips:\n" + budgetTips);
