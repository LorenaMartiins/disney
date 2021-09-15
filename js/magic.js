var magic_index = 1;
show_magic(magic_index);

function plus_magic(n){
    show_magic(magic_index += n);
}

function current_magic(n){
    show_magic(magic_index = n);
}

function show_magic(n){
  var i;
  var magic = document.getElementsByClassName("magic");
  var mots = document.getElementsByClassName("mot");

  if(n > magic.length){ magic_index = 1; }

  if(n < 1){ magic_index = magic.length }

  for(i = 0; i < magic.length; i++){
    magic[i].style.display = "none";
  }

  for(i = 0; i < mots.length; i++){
    mots[i].className = mots[i].className.replace(" active", "");
  }

  magic[magic_index-1].style.display = "block";
  mots[magic_index-1].className += " active";

}