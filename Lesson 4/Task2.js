function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(5));

function sumTo(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

alert(sumTo(6));

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

alert(sumTo(9));

// 1. Быстрее всего работает третий вариант, так как там меньше всего операций, потом с исп. цикла,
// потом уже рекурсия.
// 2. Максимальная глубина рекурсии ограничена движком JavaScript.
