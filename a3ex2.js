console.log("A3_Exercise_2");
console.log("---- ---- ----");

let day1Burnt = 400;
let day1Intake = 1500;
let day2Burnt = 450;
let day2Intake = 1800;
let day3Burnt = 300;
let day3Intake = 1600;
let day4Burnt = 500;
let day4Intake = 2000;
let day5Burnt = 350;
let day5Intake = 1700;

let baseCalorie = 1500;
let day1Surplus = day1Burnt - (day1Intake + baseCalorie);
let day2Surplus = day2Burnt - (day2Intake + baseCalorie);
let day3Surplus = day3Burnt - (day3Intake + baseCalorie);
let day4Surplus = day4Burnt - (day4Intake + baseCalorie);
let day5Surplus = day5Burnt - (day5Intake + baseCalorie);

let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt;
let totalIntake =
  day1Intake + day2Intake + day3Intake + day4Intake + day5Intake;
let totalSurplus = totalBurnt - (totalIntake + 5 * baseCalorie);

let day1Report = "";
if (day1Surplus > 0) {
  day1Report = "Day 1: Surplus/Deficit: " + day1Surplus + " (Surplus)";
} else if (day1Surplus < 0) {
  day1Report = "Day 1: Surplus/Deficit: " + day1Surplus + " (Deficit)";
} else {
  day1Report =
    "Day 1: Surplus/Deficit: " + day1Surplus + " (No Surplus/Deficit)";
}

let day2Report = "";
if (day2Surplus > 0) {
  day2Report = "Day 2: Surplus/Deficit: " + day2Surplus + " (Surplus)";
} else if (day2Surplus < 0) {
  day2Report = "Day 2: Surplus/Deficit: " + day2Surplus + " (Deficit)";
} else {
  day2Report =
    "Day 2: Surplus/Deficit: " + day2Surplus + " (No Surplus/Deficit)";
}

let day3Report = "";
if (day3Surplus > 0) {
  day3Report = "Day 3: Surplus/Deficit: " + day3Surplus + " (Surplus)";
} else if (day2Surplus < 0) {
  day3Report = "Day 3: Surplus/Deficit: " + day3Surplus + " (Deficit)";
} else {
  day3Report =
    "Day 3: Surplus/Deficit: " + day3Surplus + " (No Surplus/Deficit)";
}

let day4Report = "";
if (day4Surplus > 0) {
  day4Report = "Day 4: Surplus/Deficit: " + day4Surplus + " (Surplus)";
} else if (day4Surplus < 0) {
  day4Report = "Day 4: Surplus/Deficit: " + day4Surplus + " (Deficit)";
} else {
  day4Report =
    "Day 4: Surplus/Deficit: " + day4Surplus + " (No Surplus/Deficit)";
}

let day5Report = "";
if (day5Surplus > 0) {
  day5Report = "Day 5: Surplus/Deficit: " + day5Surplus + " (Surplus)";
} else if (day5Surplus < 0) {
  day5Report = "Day 5: Surplus/Deficit: " + day5Surplus + " (Deficit)";
} else {
  day5Report =
    "Day 5: Surplus/Deficit: " + day5Surplus + " (No Surplus/Deficit)";
}
let dailyReports =
  day1Report +
  "\n" +
  day2Report +
  "\n" +
  day3Report +
  "\n" +
  day4Report +
  "\n" +
  day5Report +
  "\n\n";
console.log("Daily Reports:\n" + dailyReports);

let totalSurplusReport = "";
if (totalSurplus > 0) {
  totalSurplusReport = "Total  Surplus/Deficit: " + totalSurplus + " (Surplus)";
} else if (totalSurplus < 0) {
  totalSurplusReport = "Total Surplus/Deficit: " + totalSurplus + " (Deficit)";
} else {
  totalSurplusReport =
    "Total Surplus/Deficit: " + totalSurplus + " (No Surplus/Deficit)";
}
let weeklySummary =
  "Total Calories Burnt: " +
  totalBurnt +
  "\nTotal Calories Intake: " +
  totalIntake +
  "\n" +
  totalSurplusReport +
  "\n\nAward:\nStanding Goal Award: Congratulations! you have kept moving throughout. Keep it up!";

console.log("Weekly Summary:\n" + weeklySummary);
