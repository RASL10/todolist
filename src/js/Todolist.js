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




var array = ["2018-03-15"]

$(function() {
  var today = new Date();
  $("#datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    maxDate: new Date('2018-3-30'),
    beforeShowDay: function(date) {
      var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
      if (contains(array,string)) {
        return [false, '']
      } else {
        var day = date.getDay();
        return [(day != 0), ''];
      }
    },
    dateFormat: "dd-mm-yy",
  });
});






$(document).on('focus', "#datepickeredit", function () {

    $(this).datepicker({
      dateFormat: "yy-mm-dd",
      maxDate: new Date('2018-3-26'),
      numberOfMonths: 3,
      beforeShowDay: function(date) {
        var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
        if (contains(array,string)) {
          return [false, '']
        } else {
          var day = date.getDay();
          return [(day != 0), ''];
        }
      },
        dateFormat: "dd-mm-yy",
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



function enter(e){
    if(e.keyCode == 13){
       displayDate();
       displayText();
    }
}

function enterButton(event) {
    if (event.keyCode === 13) {
        $("#userinput").click();
    }
};

document.getElementById('myText').addEventListener('keyup', function(event) {
event.preventDefault();
    if (event.keyCode == 13) {

        document.getElementById("userinput").click();
    }
});
document.getElementById('datepicker').addEventListener('keyup', function(event) {
event.preventDefault();
    if (event.keyCode == 13) {

        document.getElementById("userinput").click();
    }
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



var finaldate = new Date('2018/04/');
$('#clock').countdown('2018/04/10 12:34:56', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="clock-test">%-D <br />days</div> '
    + '<div class="clock-test">%H <br />hr</div> '
    + '<div class="clock-test">%M <br />min</div>'
    + '<div class="clock-test">%S <br />sec</div>'));
});






document.getElementById("mealPrice").innerHTML= document.getElementById("numberz").value/2;
document.getElementById("oneoff").innerHTML = 7.5;




function run(){
  var e = document.getElementById("numberz").value;
  var pastaclub = document.getElementById("pasta-club").value;




  if (pastaclub == 'vegetarian' ) {
    document.getElementById("oneoff").innerHTML = 7.5;

    if (e == 13.90 ) {
    var mealdecimalPricing = e/2;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 20.55 ) {
    var mealdecimalPricing = e/3;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 27.20 ) {
    var mealdecimalPricing = e/4;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 33.85) {
    var mealdecimalPricing = e/5;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 40.05) {
    var mealdecimalPricing = e/6;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  }
} else if (pastaclub == 'fish') {
  document.getElementById("oneoff").innerHTML = 9.5;
  if (e == 13.90) {
    var mealdecimalPricing = e/2 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100) / 100 ;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 20.55 ) {
    var mealdecimalPricing = e/3 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100 ;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 27.20) {
    var mealdecimalPricing = e/4 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 33.85 ) {
    var mealdecimalPricing = e/5 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 40.05) {
    var mealdecimalPricing = e/6 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  }
}
}

function sub() {

  var pastaclub = document.getElementById("pasta-club").value;
  var e = document.getElementById("numberz").value;

  if (pastaclub == 'vegetarian' ) {
        document.getElementById("oneoff").innerHTML = 7.5;
        document.getElementById("sub-link").href="https://pastaevangelists.com/pages/subscription-page?sub=vegetarian";


    if (e == 13.90) {
    var mealdecimalPricing = e/2;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100 ;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 20.55 ) {
    var mealdecimalPricing = e/3;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 27.20) {
    var mealdecimalPricing = e/4;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 33.85 ) {
    var mealdecimalPricing = e/5;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 40.05) {
    var mealdecimalPricing = e/6;
    var mealPricing = Math.round( mealdecimalPricing * 10 ) / 10;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  }
} else if (pastaclub == 'fish') {
    document.getElementById("oneoff").innerHTML = 9.5;
    document.getElementById("sub-link").href="https://pastaevangelists.com/pages/subscription-page?sub=variety";

  if (e == 13.90) {
    var mealdecimalPricing = e/2 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 20.55 ) {
    var mealdecimalPricing = e/3 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 27.20) {
    var mealdecimalPricing = e/4 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 33.85 ) {
    var mealdecimalPricing = e/5 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  } else if (e == 40.05) {
    var mealdecimalPricing = e/6 + 0.95;
    var mealPricing = Math.round( mealdecimalPricing * 100 ) / 100;
    document.getElementById("mealPrice").innerHTML = mealPricing;
  }
}

}


var output = document.getElementById("output")
var ajaxhttp = new XMLHttpRequest();
var url = "http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=2804fe82cff756c1920dd377909b24f2";

ajaxhttp.open('GET', url, true)
ajaxhttp.setRequestHeader('content-type', 'application/json')
ajaxhttp.onreadystatechange = function () {
  if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
    var jcontent = JSON.parse(ajaxhttp.responseText)
    output.innerHTML = jcontent.message;
  }
}
ajaxhttp.send();

output.innerText = "nothing"




/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 






