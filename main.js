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
    str = str.toLowerCase();
    str = str.split(' ');
    for (i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
return str.join(' ');
}
console.log(stringCapitalize("doodle"));
console.log(stringCapitalize("sam goldsmith"));
console.log(stringCapitalize("a dog went by"));

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

console.log("*Question 7");
function oddNumbers(int) {
  if (int % 2 !== 0) {
  if (int <= 40) {
    for (i=int;i<40;i+=2) {
      console.log(i);
    }
  } else if (int > 40 && int < 100 ) {
    for (j=int; j<100; j+=2) {
      console.log(j);
    }
  }
} else if (int % 2 === 0){
  if (int <= 40) {
    for (k=int+1;k<40;k+=2) {
      console.log(k);
    }
  } else if (int > 40 && int < 100 ) {
    for (l=int+1; l<100; l+=2) {
      console.log(l);
    }
}
}
}
oddNumbers(39);
console.log("///");
oddNumbers(75);
console.log("///");
oddNumbers(22);
