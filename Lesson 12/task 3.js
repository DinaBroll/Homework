var str = prompt('Введите строку');
function getVowels(str) {
  var string = str.toLowerCase().split('');
  var vowels = 'аеёиоуыэюя';

  var result = string.reduce(function(sum, val) {
    if (vowels.indexOf(val) !== -1) {
      sum++;
    }
    return sum;
  }, 0);
  return result;
}

alert('Количество гласных: ' + getVowels(str));
