const sumAll = function(num1, num2) {

  //Type security on inputs
  if(num1 < 0 ||
    num2 < 0 ||
    num1 % 1 != 0 ||
    num2 % 1 != 0 ||
    typeof num1 !== 'number' ||
    typeof num2 !== 'number'
  ) return "ERROR";

  let sum = 0;

  //Store larger and smaller of inputs
  if(num1 < num2){
    var smallerNum = num1;
    var largerNum = num2;
  }else{
    var smallerNum = num2;
    var largerNum = num1;
  }

  //Sum up from range(small, large)
  for(smallerNum; smallerNum <= largerNum; smallerNum++){
    sum += smallerNum;
  }

  return sum;

}

// Do not edit below this line
module.exports = sumAll;
