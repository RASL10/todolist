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

  document.getElementById('demo').appendChild(li)

  var editTask = document.createElement('input');
  editTask.setAttribute('type', 'button');
  editTask.setAttribute("value", "Edit");
  li.appendChild(editTask);
  editTask.addEventListener('click', function(){
    var listItem=editTask.parentNode;
    var textbox=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var containsClass=li.classList.contains("editMode");
    		//If class of the parent is .editmode
    		if(containsClass){

    		//switch to .editmode
    		//label becomes the inputs value.
label.innerText=textbox.value;

    		}else{
textbox.value=label.innerText;

    		}

    		//toggle .editmode on the parent.
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


li.addEventListener('click', function() {
      li.classList.toggle("checked");
  }, false);
