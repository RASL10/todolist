

function displayDate() {
  var dateInput = document.getElementById('datepicker').value;
  var dateLabel = document.createElement('label');
  var dateTextNode = document.createTextNode(dateInput);
  var li = document.createElement("li");
  dateLabel.appendChild(dateTextNode)
  li.appendChild(dateLabel)
  document.getElementById('date').appendChild(li)


  var removeTask = document.createElement('input');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "X");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener('click', function() {
        li.parentNode.removeChild(li);
  });
  li.appendChild(removeTask);
}



function displayText() {
  var input = document.getElementById('myText').value;
  var li = document.createElement("li");
  var textbox = document.createElement('input');
  var label = document.createElement('label');
  var textnode = document.createTextNode(input);

  textbox.setAttribute('type', 'text');
  textbox.setAttribute('value', document.getElementById('myText').value)
  li.appendChild(textbox);
  label.appendChild(textnode);
  li.appendChild(label);



  li.setAttribute('id', 'edit');
  label.addEventListener('click', function() {
        label.classList.toggle("checked");
    }, false);

  document.getElementById('list').appendChild(li)

  var editTask = document.createElement('input');
  editTask.setAttribute('type', 'button');
  editTask.setAttribute("value", "Edit");
  li.appendChild(editTask);
  editTask.addEventListener('click', function(){
    var listItem=editTask.parentNode;
    var textbox=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var containsClass=li.classList.contains("editMode");
    var containschecked=label.classList.contains("checked");
          if (containsClass) {
            label.innerText=textbox.value;
            editTask.setAttribute("value", "edit");
    		} else {
            textbox.value=label.innerText;
            editTask.setAttribute("value", "ok");
    		}
    listItem.classList.toggle("editMode");

});


var removeTask = document.createElement('input');
removeTask.setAttribute('type', 'button');
removeTask.setAttribute("value", "X");
removeTask.setAttribute("id", "removeButton");
removeTask.addEventListener('click', function() {
      li.parentNode.removeChild(li);

});
li.appendChild(removeTask);

}

$(function() {
  $( "#datepicker" ).datepicker({
    maxDate: 5
  } );
} );

function displaycalendar() {
  $( "#datepicker" ).datepicker('show');
};
