// Write a program to take a number input from user and print multiplication table 12 times for that number.

const table = (n) => {
  for (let i = 1; i <= 12; i++) console.log(`${n} X ${i} = ${n * i}`);
};
console.log(table(5));

export default table;
