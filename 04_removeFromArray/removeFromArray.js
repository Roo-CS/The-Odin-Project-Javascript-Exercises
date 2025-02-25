const removeFromArray = function(inputArray, ...toDelete) {

  let deletedNums = new Set(toDelete);
  let cleanedArray = [];
  for(const num of inputArray){
    if(!deletedNums.has(num)){
      cleanedArray.push(num);
    }
  }

  return cleanedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
