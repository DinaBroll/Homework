var countSentencesLetters = function(text) {
  text.split(/[.!?]/).forEach(function(sent) {
    if (sent === '') {
      return;
    }
    var numLetters = sent.split('').filter(function(letter) {
      if (letter !== ' ' && letter !== ',') {
        return letter;
      }
    }).length;
    alert(sent + ': Letters quantity is: ' + numLetters);
  });
};
countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
