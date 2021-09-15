var dis_index = 1;
show_dis(dis_index);

function plus_dis(n){
    show_dis(dis_index += n);
}

function current_dis(n){
    show_dis(dis_index = n);
}

function show_dis(n){
  var i;
  var dis = document.getElementsByClassName("dis");
  var bots = document.getElementsByClassName("bot");

  if(n > dis.length){ dis_index = 1; }

  if(n < 1){ dis_index = dis.length }

  for(i = 0; i < dis.length; i++){
     dis[i].style.display = "none";
  }

  for(i = 0; i < bots.length; i++){
      bots[i].className = bots[i].className.replace(" active", "");
  }

  dis[dis_index-1].style.display = "block";
  bots[dis_index-1].className += " active";

}