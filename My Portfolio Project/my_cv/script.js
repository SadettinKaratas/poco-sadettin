
let popupImages = document.getElementsByClassName("popup-images")

 function showImages(){
    popupImages.style.visibility = "visible";
}






// GO UP BUTTON//
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// END OF GO UP BUTTON//