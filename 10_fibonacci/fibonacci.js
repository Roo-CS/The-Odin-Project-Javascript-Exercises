const fibonacci = (num) =>{
 
  if(num === 0 || +num === 0) return 0;
  num = +num;

  let fibArray = [1, 1];
  let i = 0;  

  if(num > 0){
    while(fibArray.length < num){
      fibArray.push(fibArray[i] + fibArray[i+1]);
      i++;
    }

    return fibArray[fibArray.length-1];
  }

  return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
