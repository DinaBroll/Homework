var isPalindrome = function(str) {
  str = str.toLowerCase();
  if (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  ) {
    return true;
  } else {
    return false;
  }
};
isPalindrome('шалаШ');
isPalindrome('привет');
