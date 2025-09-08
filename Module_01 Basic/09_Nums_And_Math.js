const score = 100;
console.log(score)


const balance = new Number(100);
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.00
 // tofixed used to after point value num of zero 0 ex--> 5.00 

const otherNumber = 23.8978
const otherNumber1 = 123.8978
const otherNumber2 = 1123.8978

console.log(otherNumber.toPrecision(3));
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(3));

// 23.9
// 124
// 1.12e+3


const hundreds = 1000000
console.log(hundreds.toLocaleString()) //10,00,000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000



