function displayText() {
  var input = document.getElementById('myText').value;
  var li = document.createElement("li");
  var textnode = document.createTextNode(input);
  li.classList.add("yolo");
  li.appendChild(textnode);
  li.addEventListener('click', function() {
        li.classList.toggle("checked");
    }, false);
  document.getElementById('demo').appendChild(li)


  var removeTask = document.createElement('input');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "X");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener('click', function(e) {
      li.parentNode.removeChild(li);
  });
  li.appendChild(removeTask);
}

$(function() {
  $( "#datepicker" ).datepicker({
    maxDate: 5
  } );
} );
