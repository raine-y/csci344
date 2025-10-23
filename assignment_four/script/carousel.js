let carouselIndex = 0;
carouselHandler();

function carouselHandler() {
    let i;
    let carouselItem = document.getElementsByClassName("carouselItem"); //array of all items(?)
    for (i = 0; i < carouselItem.length; i++) {
        carouselItem[i].style.display = "none";
    }
    carouselIndex++;
    if (carouselIndex > carouselItem.length) { 
        carouselIndex = 1; 
    }
    carouselItem[carouselIndex - 1].style.display = "block";
    // carouselItem[carouselIndex].style.display = "block";
    // carouselItem[carouselIndex - 1].classList.add("fadeIn");
    setTimeout(carouselHandler, 4000);
}