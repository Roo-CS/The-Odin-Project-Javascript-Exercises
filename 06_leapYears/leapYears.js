/*
  Given: a year (int)

  Leap years:
    - Divisible by 4
    - Divisible by 100, ARE NOT unless divisible by 400, ARE
*/
const leapYears = function(year) {
  if(year % 4 == 0){
    if(year % 100 == 0 && year % 400 != 0){
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
