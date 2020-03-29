var buttom = document.getElementById('button');
button.onclick = function() {
  var table = document.getElementById('table');
  var row = document.createElement('TR');
  var td1 = document.createElement('TD');
  var td2 = document.createElement('TD');
  var td3 = document.createElement('TD');
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  table.appendChild(row);
};
var inputText = document.getElementsByTagName('TD');
inputText.onclick = function() {
  inputText.innerHTML = '<input type="text">';
};
