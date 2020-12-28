var slideIndex = 1;
showDivs(slideIndex);
var myIndex = 0;
carousel();

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    myIndex=n;
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}



function change_order() {
    document.getElementById("item3").style.gridRowStart=1;
    document.getElementById("item3").style.gridColumnStart=1;
    document.getElementById("item1").style.gridRowStart=1;
    document.getElementById("item1").style.gridColumnStart=2;
    document.getElementById("item2").style.gridRowStart=1;
    document.getElementById("item2").style.gridColumnStart=3;
    document.getElementById("item9").style.gridRowStart=2;
    document.getElementById("item9").style.gridColumnStart=1;
    document.getElementById("item10").style.gridRowStart=2;
    document.getElementById("item10").style.gridColumnStart=2;
    document.getElementById("item11").style.gridRowStart=2;
    document.getElementById("item11").style.gridColumnStart=3;
    document.getElementById("item7").style.gridRowStart=3;
    document.getElementById("item7").style.gridColumnStart=1;
    document.getElementById("item6").style.gridRowStart=3;
    document.getElementById("item6").style.gridColumnStart=2;
    document.getElementById("item4").style.gridRowStart=3;
    document.getElementById("item4").style.gridColumnStart=3;
    document.getElementById("item5").style.gridRowStart=4;
    document.getElementById("item5").style.gridColumnStart=1;
    document.getElementById("item8").style.gridRowStart=4;
    document.getElementById("item8").style.gridColumnStart=2;
}

function change_order_alpha(){
    document.getElementById("item8").style.gridRowStart=1;
    document.getElementById("item8").style.gridColumnStart=1;
    document.getElementById("item9").style.gridRowStart=1;
    document.getElementById("item9").style.gridColumnStart=2;
    document.getElementById("item6").style.gridRowStart=1;
    document.getElementById("item6").style.gridColumnStart=3;
    document.getElementById("item10").style.gridRowStart=2;
    document.getElementById("item10").style.gridColumnStart=1;
    document.getElementById("item3").style.gridRowStart=2;
    document.getElementById("item3").style.gridColumnStart=2;
    document.getElementById("item1").style.gridRowStart=2;
    document.getElementById("item1").style.gridColumnStart=3;
    document.getElementById("item7").style.gridRowStart=3;
    document.getElementById("item7").style.gridColumnStart=1;
    document.getElementById("item11").style.gridRowStart=3;
    document.getElementById("item11").style.gridColumnStart=2;
    document.getElementById("item5").style.gridRowStart=3;
    document.getElementById("item5").style.gridColumnStart=3;
    document.getElementById("item2").style.gridRowStart=4;
    document.getElementById("item2").style.gridColumnStart=1;
    document.getElementById("item4").style.gridRowStart=4;
    document.getElementById("item4").style.gridColumnStart=2;
}