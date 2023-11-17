function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.currentTarget.appendChild(document.getElementById(data));
}

var answer2 = {
  'vis_hue':['dropBox6'],
  'vis_value':['dropBox5'],
  'vis_position':['dropBox7'],
  'vis_size':['dropBox8']
}
function checkRight(){
  var rightAnswer = 0;
  var elements = document.getElementsByClassName("visvar2");
  for (var i = 0; i < elements.length; i++){
    var myElem = elements[i];
    if(answer2[myElem.id].includes(myElem.parentElement.id)){
        rightAnswer++;
    }
  }
  var score = document.getElementById('checkRight');
    
  score.textContent ='You got ' + rightAnswer + ' questions out of ' +
               elements.length + ' right!!!✅';
}