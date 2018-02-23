var ul = document.getElementById('demo');
var lastid = 0;

function displayText() {
  var myText = document.getElementById('myText')
  var li = document.createElement("li");
  li.setAttribute('id', myText.value);
  li.appendChild(document.createTextNode(myText.value));
  ul.appendChild(li);

}


function removeItem() {
  var candidate = document.getElementById("myText");
  var item = document.getElementById(myText.value);
  ul.removeChild(item);
}


function addText(){
    var input = document.getElementById('inputTask').value;
    var node=document.createElement("p");
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('addTask').appendChild(node);

    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function(e) {
        node.parentNode.removeChild(node);
    }, false);
    node.appendChild(removeTask);


}

$(function() {
  $( "#datepicker" ).datepicker({
    maxDate: 5
  } );
} );

$(function(){
  $('.carousel').slick({
    slidesToShow: 4,
    dots:true,
    centerMode: true,
  });
});
