const carsouelImage = document.getElementById("carousel-image"),
    dot1 = document.getElementById("dot1"),
    dot2 = document.getElementById("dot2"),
    dot3 = document.getElementById("dot3");


let images = [
    "images/cloths 1.png",
    "images/clothis 2.png",
    "images/clothis 3.png"
];

dot1.onclick = EventHandler;
dot2.onclick = EventHandler;
dot3.onclick = EventHandler;

function EventHandler() {
    carsouelImage.src = images[this.dataset.img];
}

