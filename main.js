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

function sort_American(){
    document.getElementById("item1").style.display= "block";
    document.getElementById("item2").style.display= "block";
    document.getElementById("item3").style.display= "block";
    document.getElementById("item4").style.display= "block";
    document.getElementById("item5").style.display= "block";
    document.getElementById("item6").style.display= "block";
    document.getElementById("item7").style.display= "block";
    document.getElementById("item8").style.display= "block";
    document.getElementById("item9").style.display= "block";
    document.getElementById("item10").style.display= "block";
    document.getElementById("item11").style.display= "block";
    document.getElementById("item12").style.display= "block";
    document.getElementById("item13").style.display= "block";
    document.getElementById("item15").style.display= "block";
    document.getElementById("item14").style.display= "block";
    document.getElementById("item18").style.display= "block";
    document.getElementById("item16").style.display= "block";
    document.getElementById("item17").style.display= "block";
    document.getElementById("item19").style.display= "block";
    document.getElementById("item3").style.gridRowStart=1;
    document.getElementById("item3").style.gridColumnStart=1;
    document.getElementById("item16").style.gridRowStart=1;
    document.getElementById("item16").style.gridColumnStart=2;
    document.getElementById("item8").style.gridRowStart=1;
    document.getElementById("item8").style.gridColumnStart=3;
    document.getElementById("item9").style.gridRowStart=2;
    document.getElementById("item9").style.gridColumnStart=1;
    document.getElementById("item10").style.gridRowStart=2;
    document.getElementById("item10").style.gridColumnStart=2;
    document.getElementById("item5").style.gridRowStart=2;
    document.getElementById("item5").style.gridColumnStart=3;
    document.getElementById("item18").style.gridRowStart=3;
    document.getElementById("item18").style.gridColumnStart=1;
    document.getElementById("item2").style.display= "none";
    document.getElementById("item4").style.display= "none";
    document.getElementById("item6").style.display= "none";
    document.getElementById("item7").style.display= "none";
    document.getElementById("item11").style.display= "none";
    document.getElementById("item12").style.display= "none";
    document.getElementById("item1").style.display= "none";
    document.getElementById("item13").style.display= "none";
    document.getElementById("item14").style.display= "none";
    document.getElementById("item15").style.display= "none";
    document.getElementById("item17").style.display= "none";
    document.getElementById("item19").style.display= "none";
}
function sort_Asian(){
    document.getElementById("item1").style.display= "block";
    document.getElementById("item2").style.display= "block";
    document.getElementById("item3").style.display= "block";
    document.getElementById("item4").style.display= "block";
    document.getElementById("item5").style.display= "block";
    document.getElementById("item6").style.display= "block";
    document.getElementById("item7").style.display= "block";
    document.getElementById("item8").style.display= "block";
    document.getElementById("item9").style.display= "block";
    document.getElementById("item10").style.display= "block";
    document.getElementById("item11").style.display= "block";
    document.getElementById("item12").style.display= "block";
    document.getElementById("item13").style.display= "block";
    document.getElementById("item15").style.display= "block";
    document.getElementById("item14").style.display= "block";
    document.getElementById("item18").style.display= "block";
    document.getElementById("item16").style.display= "block";
    document.getElementById("item17").style.display= "block";
    document.getElementById("item19").style.display= "block";
    document.getElementById("item2").style.gridRowStart=1;
    document.getElementById("item2").style.gridColumnStart=1;
    document.getElementById("item17").style.gridRowStart=1;
    document.getElementById("item17").style.gridColumnStart=2;
    document.getElementById("item19").style.gridRowStart=1;
    document.getElementById("item19").style.gridColumnStart=3;
    document.getElementById("item6").style.gridRowStart=2;
    document.getElementById("item6").style.gridColumnStart=1;
    document.getElementById("item7").style.gridRowStart=2;
    document.getElementById("item7").style.gridColumnStart=2;
    document.getElementById("item14").style.gridRowStart=2;
    document.getElementById("item14").style.gridColumnStart=3;
    document.getElementById("item1").style.display= "none";
    document.getElementById("item3").style.display= "none";
    document.getElementById("item4").style.display= "none";
    document.getElementById("item5").style.display= "none";
    document.getElementById("item8").style.display= "none";
    document.getElementById("item9").style.display= "none";
    document.getElementById("item10").style.display= "none";
    document.getElementById("item11").style.display= "none";
    document.getElementById("item12").style.display= "none";
    document.getElementById("item13").style.display= "none";
    document.getElementById("item18").style.display= "none";
    document.getElementById("item15").style.display= "none";
    document.getElementById("item16").style.display= "none";
}

function sort_Italian(){
    document.getElementById("item1").style.display= "block";
    document.getElementById("item2").style.display= "block";
    document.getElementById("item3").style.display= "block";
    document.getElementById("item4").style.display= "block";
    document.getElementById("item5").style.display= "block";
    document.getElementById("item6").style.display= "block";
    document.getElementById("item7").style.display= "block";
    document.getElementById("item8").style.display= "block";
    document.getElementById("item9").style.display= "block";
    document.getElementById("item10").style.display= "block";
    document.getElementById("item11").style.display= "block";
    document.getElementById("item12").style.display= "block";
    document.getElementById("item13").style.display= "block";
    document.getElementById("item15").style.display= "block";
    document.getElementById("item14").style.display= "block";
    document.getElementById("item18").style.display= "block";
    document.getElementById("item16").style.display= "block";
    document.getElementById("item17").style.display= "block";
    document.getElementById("item19").style.display= "block";
    document.getElementById("item4").style.gridRowStart=1;
    document.getElementById("item4").style.gridColumnStart=1;
    document.getElementById("item13").style.gridRowStart=1;
    document.getElementById("item13").style.gridColumnStart=2;
    document.getElementById("item15").style.gridRowStart=1;
    document.getElementById("item15").style.gridColumnStart=3;
    document.getElementById("item1").style.display= "none";
    document.getElementById("item2").style.display= "none";
    document.getElementById("item3").style.display= "none";
    document.getElementById("item5").style.display= "none";
    document.getElementById("item6").style.display= "none";
    document.getElementById("item7").style.display= "none";
    document.getElementById("item8").style.display= "none";
    document.getElementById("item9").style.display= "none";
    document.getElementById("item10").style.display= "none";
    document.getElementById("item11").style.display= "none";
    document.getElementById("item12").style.display= "none";
    document.getElementById("item14").style.display= "none";
    document.getElementById("item18").style.display= "none";
    document.getElementById("item16").style.display= "none";
    document.getElementById("item17").style.display= "none";
     document.getElementById("item19").style.display= "none";
}
function sort_African(){
    document.getElementById("item1").style.display= "block";
    document.getElementById("item2").style.display= "block";
    document.getElementById("item3").style.display= "block";
    document.getElementById("item4").style.display= "block";
    document.getElementById("item5").style.display= "block";
    document.getElementById("item6").style.display= "block";
    document.getElementById("item7").style.display= "block";
    document.getElementById("item8").style.display= "block";
    document.getElementById("item9").style.display= "block";
    document.getElementById("item10").style.display= "block";
    document.getElementById("item11").style.display= "block";
    document.getElementById("item12").style.display= "block";
    document.getElementById("item13").style.display= "block";
    document.getElementById("item15").style.display= "block";
    document.getElementById("item14").style.display= "block";
    document.getElementById("item18").style.display= "block";
    document.getElementById("item16").style.display= "block";
    document.getElementById("item17").style.display= "block";
    document.getElementById("item19").style.display= "block";
    document.getElementById("item1").style.gridRowStart=1;
    document.getElementById("item1").style.gridColumnStart=1;
    document.getElementById("item11").style.gridRowStart=1;
    document.getElementById("item11").style.gridColumnStart=2;
    document.getElementById("item12").style.gridRowStart=1;
    document.getElementById("item12").style.gridColumnStart=3;
    document.getElementById("item2").style.display= "none";
    document.getElementById("item3").style.display= "none";
    document.getElementById("item4").style.display= "none";
    document.getElementById("item5").style.display= "none";
    document.getElementById("item6").style.display= "none";
    document.getElementById("item7").style.display= "none";
    document.getElementById("item8").style.display= "none";
    document.getElementById("item9").style.display= "none";
    document.getElementById("item10").style.display= "none";
    document.getElementById("item13").style.display= "none";
    document.getElementById("item15").style.display= "none";
    document.getElementById("item14").style.display= "none";
    document.getElementById("item18").style.display= "none";
    document.getElementById("item16").style.display= "none";
    document.getElementById("item17").style.display= "none";
    document.getElementById("item19").style.display= "none";
}
