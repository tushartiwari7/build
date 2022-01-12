const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const allDays = ["saturday", "sunday", ...weekdays];

const checkWeekDay = (day) =>
  allDays.includes(day)
    ? weekdays.includes(day)
      ? `${day} is a weekday`
      : `${day} is a weekend day`
    : "You have entered an invalid input. Please enter day of the week in smallcase letters";

console.log("monday");
console.log("saturday");
console.log("mon");

export default checkWeekDay;
