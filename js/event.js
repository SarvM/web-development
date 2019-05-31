<button>Change color</button>

var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}



/* Change the anonymous function to function declaration */
var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;


/* Different events */
btn.onfocus
btn.onblur 
btn.ondblclick
btn.onmouseover 
btn.onmouseout 


/* Inline event handler */

<button onclick="bgChange()">Press me</button>

function bgChange() {
    console.log('inside');
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }
  
  function random(number) {
    return Math.floor(Math.random()*(number+1));
  }