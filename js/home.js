//1
var magIndex = [1, 1];
var magId = ["mag1", "mag2"]
showMags(-1, 0);
showMags(1, 1);

function plusMag(n, no) {
  showMags(magIndex[no] += n, no);
}

function showMags(n, no) {
  var i;
  var x = document.getElementsByClassName(magId[no]);
  if (n > x.length) {magIndex[no] = 1}    
  if (n < 1) {magIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[magIndex[no]-1].style.display = "block";  
}

//2
var hollIndex = [1, 1];
var hollId = ["holl1", "holl2"]
showHoll(-1, 0);
showHoll(1, 1);

function plusHoll(n, no) {
  showHoll(hollIndex[no] += n, no);
}

function showHoll(n, no) {
  var i;
  var x = document.getElementsByClassName(hollId[no]);
  if (n > x.length) {hollIndex[no] = 1}    
  if (n < 1) {hollIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[hollIndex[no]-1].style.display = "block";  
}

//3
var parIndex = [1, 1];
var parId = ["par1", "par2"]
showPar(-1, 0);
showPar(1, 1);

function plusPar(n, no) {
  showPar(parIndex[no] += n, no);
}

function showPar(n, no) {
  var i;
  var x = document.getElementsByClassName(parId[no]);
  if (n > x.length) {parIndex[no] = 1}    
  if (n < 1) {parIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[parIndex[no]-1].style.display = "block";  
}

//4
var waltIndex = [1, 1];
var waltId = ["walt1", "walt2"]
showWalt(-1, 0);
showWalt(1, 1);

function plusWalt(n, no) {
  showWalt(waltIndex[no] += n, no);
}

function showWalt(n, no) {
  var i;
  var x = document.getElementsByClassName(waltId[no]);
  if (n > x.length) {waltIndex[no] = 1}    
  if (n < 1) {waltIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[waltIndex[no]-1].style.display = "block";  
}




