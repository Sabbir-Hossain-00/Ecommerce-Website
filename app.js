let bar = document.querySelector("#bar");
let navLeft = document.querySelector(".nav-left");
let clos = document.querySelector("#close");


if(bar){
    bar.addEventListener("click",()=>{
        navLeft.style.right = "0";
    });

    clos.addEventListener("click",()=>{
        navLeft.style.right = "-3000px";
    });
}



var mainImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}


