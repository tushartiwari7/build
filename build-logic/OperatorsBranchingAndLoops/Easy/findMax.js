const findMAx = (...nums) => nums.reduce((max, num) => (num > max ? num : max));
console.log(findMAx(2, 3, 12, 1, 0));
export default findMAx;
