function pow(x, n) {
  var res = x;
  for (var i = 1; i < n; i++) {
    res *= x;
  }
  return res;
}
var x = parseInt(prompt('Введите число', ''));
var n = parseInt(prompt('В какую степень возвести?', ''));
if (x > 0 && n > 0) {
  alert(pow(x, n));
} else {
  alert('Введите положительное число');
}

