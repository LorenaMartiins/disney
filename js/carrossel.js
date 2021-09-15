var wall_index = 0;
show_walls();

function show_walls() {
  var i;
  var walls = document.getElementsByClassName("wall");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < walls.length; i++) {
    walls[i].style.display = "none";  
  }
  wall_index++;
  if (wall_index > walls.length) {wall_index = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  walls[wall_index-1].style.display = "block";  
  dots[wall_index-1].className += " active";
  setTimeout(show_walls, 3000); // Change image every 2 seconds
}

//
var carIndex = [1, 1];
var carId = ["car1", "car2"]
showCar(1, 0);
showCar(1, 1);

function plusCar(n, no) {
  showCar(carIndex[no] += n, no);
}

function showCar(n, no) {
  var i;
  var x = document.getElementsByClassName(carId[no]);
  if (n > x.length) {carIndex[no] = 1}    
  if (n < 1) {carIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[carIndex[no]-1].style.display = "block";  
}


//carrossel 2
var wallIndex = [1, 1];
var wallId = ["wall1", "wall2"]
showWalls(1, 0);
showWalls(1, 1);

function plusWall(n, no) {
  showWalls(wallIndex[no] += n, no);
}

function showWalls(n, no) {
  var i;
  var x = document.getElementsByClassName(wallId[no]);
  if (n > x.length) {wallIndex[no] = 1}    
  if (n < 1) {wallIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[wallIndex[no]-1].style.display = "block";  
}

//carrossel 3
var slideIndex = [1, 1];
var slideId = ["slide1", "slide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlide(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


//disney +

