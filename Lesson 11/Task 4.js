var areAnagrams = function(str1, str2) {
  str1 = str1
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  str2 = str2
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  if (srt1 === str2) {
    return true;
  } else {
    return false;
  }
};
