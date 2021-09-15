var his_index = 1;
show_his(his_index);

function plus_his(n){
    show_his(his_index += n);
}

function current_his(n){
    show_his(his_index = n);
}

function show_his(n){
  var i;
  var his = document.getElementsByClassName("his");
  var hots = document.getElementsByClassName("hot");

  if(n > his.length){ his_index = 1; }

  if(n < 1){ his_index = his.length }

  for(i = 0; i < his.length; i++){
     his[i].style.display = "none";
  }

  for(i = 0; i < hots.length; i++){
      hots[i].className = hots[i].className.replace(" active", "");
  }

  his[his_index-1].style.display = "block";
  hots[his_index-1].className += " active";

}