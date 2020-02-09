var arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
function treeSum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      result += +arr[i];
    } else if (typeof arr == "object" && i < arr.length) {
      result += treeSum(arr[i]);
    }
  }
  return result;
}
treeSum(arr);
