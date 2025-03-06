const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce(add, 0);

const multiply = (arr) => arr.reduce((a, b) => a * b);

const power = (a, b) => a ** b;

const factorial = (num) => {
  if(num === 0) return 1;
  let total = 1;
  for(let i = 1; i <= num; i++){
    total = i * total;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
