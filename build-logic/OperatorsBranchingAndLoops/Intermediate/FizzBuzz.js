// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

const FizzBuzz = () => {
  const output = [];
  for (let i = 1; i <= 100; i++)
    i % 15 === 0
      ? output.push("FizzBuzz")
      : i % 3 === 0
      ? output.push("Fizz")
      : i % 5 === 0
      ? output.push("Buzz")
      : output.push(i);
  return output;
};

console.log(FizzBuzz);
export default FizzBuzz;
