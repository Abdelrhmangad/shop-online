// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-white";
// }


const carsouelImage = document.getElementById("carousel-image"),
    dot1 = document.getElementById("dot1"),
    dot2 = document.getElementById("dot2"),
    dot3 = document.getElementById("dot3");


let images = [
    "images/cloths 1.png",
    "images/clothis 2.png",
    "images/clothis 3.png"
];


console.log(dot1.dataset.img);
console.log(dot2.dataset.img);
console.log(dot3.dataset.img);
console.log(carsouelImage.src);

console.log(images)

// function changeImageSrc1(){
//     carsouelImage.src = images[0];
// }
// function changeImageSrc2(){
//     carsouelImage.src = images[1];
// }
// function changeImageSrc3(){
//     carsouelImage.src = images[2];
// }

dot1.onclick = EventHandler;
dot2.onclick = EventHandler;
dot3.onclick = EventHandler;

function EventHandler() {
    carsouelImage.src = images[this.dataset.img];
}

