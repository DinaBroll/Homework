var divideArr = function(arr, arrSize) {
  var newArr = [];

  for (var i = 0; i < Math.ceil(arr.length / arrSize); i++) {
    newArr[i] = arr.slice(i * arrSize, i * arrSize + arrSize);
  }
  return newArr;
};
