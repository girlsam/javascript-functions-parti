console.log("*Problem 1");
function sumTwoNumbers (num1, num2) {
  return num1 + num2;
}
var resultSum = sumTwoNumbers(2, 4);
console.log(resultSum);

console.log("*Problem 2");
function isEqual(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual(9, 9));
console.log(isEqual(8, 9));

console.log("*Problem 3");
function discountPercentage(price, discount) {
  if (discount >= 0 && discount <= 100) {
    return price * (discount/100);
  } else {
    return "Warning. Invalid numbers.";
}
}
console.log(discountPercentage(10, 130));
console.log(discountPercentage(100, 4));

console.log("*Question 4");
function stringCapitalize(str) {
  return str.toUpperCase();
}
console.log(stringCapitalize('show me the money!'));
console.log(stringCapitalize('shOW me the MONEY!'));

console.log("*Question 5");
function evenNumbers(int) {
  for (i=0;i<int;i++)
    if (int > 100) {
      console.log("Number less than 100 plz.");
      break;
    } else if (i % 2 === 0) {
    console.log(i);
}
}
evenNumbers(14);
evenNumbers(77);
evenNumbers(110);

console.log("*Question 6");
function isDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(14, 7));
console.log(isDivisible(14, 6));
console.log(isDivisible(210, 10));
