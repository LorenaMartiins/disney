//disneystudio
var marIndex = [1, 1];
var marId = ["mar1", "mar2"]
showMar(1, 0);
showMar(1, 1);

function plusMar(n, no) {
  showMar(marIndex[no] += n, no);
}

function showMar(n, no) {
  var i;
  var x = document.getElementsByClassName(marId[no]);
  if (n > x.length) {marIndex[no] = 1}    
  if (n < 1) {marIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[marIndex[no]-1].style.display = "block";  
}

//2
var pixIndex = [1, 1];
var pixId = ["pix1", "pix2"]
showPix(1, 0);
showPix(1, 1);

function plusPix(n, no) {
  showPix(pixIndex[no] += n, no);
}

function showPix(n, no) {
  var i;
  var x = document.getElementsByClassName(pixId[no]);
  if (n > x.length) {pixIndex[no] = 1}    
  if (n < 1) {pixIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[pixIndex[no]-1].style.display = "block";  
}

//3
var cen_index = 1
show_cen(cen_index);

function plus_cen(n){
    show_cen(cen_index += n);
}

function show_cen(n){
    var i;
    var cens = document.getElementsByClassName("cen");

    if(n > cens.length){ cen_index = 1; }
    if(n < 1){ cen_index = cens.length }

    for(i = 0; i < cens.length; i++){
        cens[i].style.display = "none";
    }

    cens[cen_index-1].style.display = "block";
}