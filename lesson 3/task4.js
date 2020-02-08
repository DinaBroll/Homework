var arr = [];
for (var i = 0; ; i++) {
  var question = prompt("Введите число");

  if (question === "" || question === null || isNaN(question)) {
    break;
  }
  arr.push(+question);
}
var summ = 0;
for (var j = 0; j < arr.length; j++) {
  summ += arr[j];
}
alert("Сумма всех значений массива = " + summ);
console.log(arr);