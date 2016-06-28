var modal = document.getElementById('startModal');
var span = document.getElementsByClassName("close")[0];

var playerchoice;
span.onclick = function() {
  modal.style.display = "none";
}
Xstart.onclick = function() {
  modal.style.display = "none";
  document.getElementById("xChoice").style.display = "block";
  playerchoice = "X";
}
Ostart.onclick = function() {
  modal.style.display = "none";
  document.getElementById("oChoice").style.display = "block";
  playerchoice = "O";
}

var playerselection = [];


var isWon = false;




//win conditions

var win1 = [1,2,3];
var win2=[1,4,7];
var win3=[7,8,9];
var win4=[3,6,9];
var win5=[1,5,9];
var win6=[3,5,7];

//end win condtions


var lastClicked;
var grid = clickableGrid(3, 3, function(el, row, col, i) {
  console.log("You clicked on element:", el);
  console.log("You clicked on row:", row);
  console.log("You clicked on col:", col);
  console.log("You clicked on item #:", i);
  
  playerselection.push(i);

  
  if(playerselection.toString()=== win1.toString()){
    console.log();
  }
  console.log(playerselection);
  
  
  if(playerchoice == "O"){
    el.className = 'clickedO';
  }
  if(playerchoice =="X"){
    el.className='clickedX';
  }
  
});

document.body.appendChild(grid);

function clickableGrid(rows, cols, callback) {
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.innerHTML = ++i;
      cell.addEventListener('click', (function(el, r, c, i) {
        return function() {
          callback(el, r, c, i);
        }
      })(cell, r, c, i), false);
    }
  }
  return grid;
}