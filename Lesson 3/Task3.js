var obj = {};
function isEmpty(obj) {
  for (var k in obj) {
    return false;
  }
  return true;
}
