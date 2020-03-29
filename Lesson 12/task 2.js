var strs = ['00', '13', '24'];
var result = strs.reduce(function(phrase, numbes, index) {
  return index === 0
    ? 'Текущее время: ' + phrase + numbes
    : phrase + ' : ' + numbes;
}, '');
