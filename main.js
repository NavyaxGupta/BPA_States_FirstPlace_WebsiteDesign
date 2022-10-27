var slideIndex = 1; 
showDivs(slideIndex);
var myIndex = 0;
carousel();

// Next/previous controls
function plusSlides(n) {
    showDivs(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showDivs(slideIndex = n);
}

//Operated Slideshow
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    myIndex=n;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
}

//Automatic slideshow
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[myIndex-1].style.display = "block";
    dots[myIndex-1].className += " active";
    setTimeout(carousel, 3000); // Change image every 3 seconds
    
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function myHideFunction() {
  var x = document.getElementById("myMessage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


