

function displayDate() {
  var dateInput = document.getElementById('datepicker').value;
  var dateLabel = document.createElement('label');
  var dateTextNode = document.createTextNode(dateInput);
  var li = document.createElement("li");
  var dateTextBox = document.createElement('input');

  dateTextBox.setAttribute('type', 'text');
  dateTextBox.setAttribute('id', "datepickeredit" )
  li.appendChild(dateTextBox);
  dateLabel.appendChild(dateTextNode)
  li.appendChild(dateLabel)

  document.getElementById('date').appendChild(li)

  dateLabel.addEventListener('click', function() {
        dateLabel.classList.toggle("checked");
    }, false);


  var removeTask = document.createElement('input');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "X");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener('click', function() {
        li.parentNode.removeChild(li);
  });
  li.appendChild(removeTask);

  var editDate = document.createElement('input');
  editDate.setAttribute('type', 'button');
  editDate.setAttribute("value", "Edit");
  li.appendChild(editDate);
  editDate.addEventListener('click', function(){
    var listItem=editDate.parentNode;
    var textbox=listItem.querySelector('input[type=text]');

    var label=listItem.querySelector("label");
    var containsClass=li.classList.contains("editMode");
    var containschecked=label.classList.contains("checked");
          if (containsClass) {
            label.innerText=textbox.value;
            editDate.setAttribute("value", "edit");
        } else {

            textbox.value=label.innerText;
            editDate.setAttribute("value", "ok");
        }
    listItem.classList.toggle("editMode");

});

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




var array = ["2018-03-29"]

$(function() {
  var today = new Date();
  $("#datepicker").datepicker({
    dateFormat: 'dd MM yy',
    beforeShowDay: function(date) {
      var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
      if (contains(array,string)) {
        debugger;
        return [false, '']
      } else {
        var day = date.getDay();
        return [(day != 0), ''];
      }
    },
  });
});




$(function() {
  $( "#datepickeredit" ).datepicker({
    maxDate: 5,
  });
} );

$(document).on('focus', "#datepickeredit", function () {

    $(this).datepicker({
      dateFormat: 'dd/MM/yy',
      beforeShowDay: function(date) {
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        if (contains(array,string)) {
          debugger;
          return [false, '']
        } else {
          var day = date.getDay();
          return [(day != 0), ''];
        }
      },
    });


});

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}



function displaycalendar() {
  $( ".datepicker" ).datepicker('show');
};

function checkValue () {
  var userNumber = document.getElementById('number').value;
  var numberText = document.getElementById('hello')
  if (userNumber > 5) {
    numberText.classList.add('hello-style')
    numberText.classList.remove('bye-style')
  } else if (userNumber < 5) {
      numberText.classList.remove('hello-style');
      numberText.classList.add('bye-style')
  } else {
    return
  }
}
