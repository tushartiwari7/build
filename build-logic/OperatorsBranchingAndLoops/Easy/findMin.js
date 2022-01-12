const findMin = (...nums) => nums.reduce((min, num) => (num < min ? num : min));
console.log(findMin(2, 3, 12, 1, 0));
export default findMin;
