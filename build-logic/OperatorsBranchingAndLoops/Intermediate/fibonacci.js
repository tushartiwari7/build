const sequence = [0, 1];
const fibonacci = (n) => {
  if (n <= sequence.length) return sequence[n - 1];
  else {
    const top = fibonacci(n - 1) + fibonacci(n - 2);
    sequence.push(top);
    return top;
  }
};

const fibonacciSeq = (length) =>
  fibonacci(length)
    ? sequence
    : `Please enter a number greater than or equal to Zero`;

console.log(fibonacciSeq(10));
export default fibonacciSeq;
