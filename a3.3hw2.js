console.log("A3.3_HW_2");
console.log("---- ---- ----");

let goalAmount = 12000;
let currentSavingsMonth1 = 3000;
let currentSavingsMonth2 = 5000;
let currentSavingsMonth3 = 8000;

let savingsContributionMonth1 = 1000;
let savingsContributionMonth2 = 1500;
let savingsContributionMonth3 = 2000;

let totalCurrentSavings =
  currentSavingsMonth1 + currentSavingsMonth2 + currentSavingsMonth3;
let totalSavingsContributions =
  savingsContributionMonth1 +
  savingsContributionMonth2 +
  savingsContributionMonth3;

let quaterlyGoalAmount = goalAmount / 4;

let percentageAchieved = (totalCurrentSavings / quaterlyGoalAmount) * 100;

let projectedTimeline = "";

if (percentageAchieved >= 100) {
  projectedTimeline =
    "Congratulations! You have already achieved your quaterly savings goal!";
} else if (percentageAchieved >= 75) {
  projectedTimeline =
    "At your current savings rate, you are on track to reach your quaterly goal by the end of the quater.";
} else {
  projectedTimeline =
    "Based on your current savings rate, it may take some additional time to reach your quaterly goal. Considering increasing your savings contributions.";
}

let savingsTips = "";
if (percentageAchieved >= 80) {
  savingsTips =
    "Great job! You are making excellent progress towards your quaterly goal. Keep up the good work!";
} else if (percentageAchieved >= 50) {
  savingsTips =
    "You are half way there! try to find additional ways to save money and increase your savings rate.";
} else {
  savingsTips =
    "Too reach your quaterly goals sooner, considering cutting back on non-essential expenses and finding opportunities to save more.";
}

console.log("Quaterly Savings Report");
console.log("------------------------");
console.log("Goal Amount: $" + goalAmount);
console.log("Quaterly Goal Amount: $" + quaterlyGoalAmount);
console.log("Total Current Savings: $" + totalCurrentSavings);
console.log("Total Savings Contributions: $" + totalSavingsContributions);
console.log("Percentage Achieved: " + percentageAchieved + "\n");
console.log("Projected Timeline:", projectedTimeline + "\n");
console.log("Savings Tips:", savingsTips + "\n");
