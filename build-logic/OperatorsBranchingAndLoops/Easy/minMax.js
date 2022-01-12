const checkMinAndMax = (num1, num2) =>
  num1 > num2
    ? `${num1} is maximum and ${num2} is minimum`
    : num1 === num2
    ? `${num1} and ${num2} both are equal`
    : `${num2} is maximum and ${num1} is minimum`;

console.log(checkMinAndMax(4, 5));
export default checkMinAndMax;
