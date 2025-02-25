const convertToCelsius = function(temperature) {
  // x(F) = (x - 32) * 5/9 C
  return Number(((temperature - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  // x(C) = (x * 9/5 + 32)_F
  return Number((temperature * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
