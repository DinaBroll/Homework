var isNumber = +prompt("Назовите число");
var isSumm = +prompt("Сколько прибавить?");
var isSubtract = +prompt("Сколько вычесть из предыдущего результата?");
var isMultiply = +prompt("На сколько умножить предыдущий результат?");
var isDivision = +prompt("На сколько разделить предыдущий результат?");
var result = ((isNumber + isSumm - isSubtract) * isMultiply) / isDivision;
alert(
  "Формула: " + "(" +
    isNumber +
    " + " +
    isSumm +
    " - " +
    isSubtract + ")" +
    " * " +
    isMultiply +
    " / " +
    isDivision +
    "\nРезультат: " +
    result
);
