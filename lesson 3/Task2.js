var login = prompt("ВВедите логин");
if (login == "Админ") {
  var password = prompt("Введите пароль");
  if (password == "Чёрный Властелин") {
    alert("Добро пожаловать!");
  } else if (password == null) {
    alert("Вход отменён");
  } else {
    alert("Пароль неверен");
  }
} else if (login == null) {
  alert("Вход отменен");
} else {
  alert("Я Вас не знаю");
}
