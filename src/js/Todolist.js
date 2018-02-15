function displayText() {
  var ul = document.getElementById('demo');
  var myText = document.getElementById('myText')
  var li = document.createElement("li");
  li.setAttribute('id', myText.value);
  li.appendChild(document.createTextNode(myText.value));
  ul.appendChild(li);

}

function removeItem() {
  var ul = document.getElementById("demo");
  var candidate = document.getElementById("myText");
  var item = document.getElementById(myText.value);
  ul.removeChild(item);
}
