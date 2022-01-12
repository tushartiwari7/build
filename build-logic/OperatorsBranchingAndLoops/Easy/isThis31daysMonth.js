const all31daysMonths = ["jan", "mar", "may", "jul", "aug", "oct", "dec"];
const allMonths = ["feb", "apr", "jun", "sep", "nov", ...all31daysMonths];

const isThis31daysMonth = (month) =>
  allMonths.includes(month)
    ? all31daysMonths.includes(month)
      ? `${month} has 31 days`
      : `${month} doesn't have 31 days`
    : "You have entered an invalid input. Please enter first 3character of the month in smallcase";

console.log("jan");
console.log("feb");
console.log("january");

export default isThis31daysMonth;
