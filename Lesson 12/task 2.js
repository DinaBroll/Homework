var strs = ['00', '13', '24'];
var result = strs.reduce(function(phrase, number) {
  return phrase + ' : ' + number;
}, 'Текущее время');


