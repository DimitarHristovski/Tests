const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const a = 7;
const b = 4;

console.log(`Add res of ${a} & ${b} is ${add(a, b)}`);
console.log(`Subtract res of ${a} & ${b} is ${subtract(a, b)}`);
console.log(`Multiply res of ${a} & ${b} is ${multiply(a, b)}`);
console.log(`Divide res of ${a} & ${b} is ${divide(a, b)}`);

function calc(operator, a, b, fn) {
  console.log(`${operator} na ${a} i ${b} e ${fn(a, b)}`);
}
module.exports =calc;