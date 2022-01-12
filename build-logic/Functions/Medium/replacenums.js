// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
const replaceNums = (arr, target, source) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] === source) arr[i] = target;
  return arr;
};

replaceNums([2, 3, 4, 2, 3, 4, 3, 4, 5], 9, 4);
