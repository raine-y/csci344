let carouselIndex = 0;
carouselHandler();

function carouselHandler() {
    let i;
    let carouselItem = document.getElementsByClassName("carouselItem");
    for (i = 0; i < carouselItem.length; i++) {
        carouselItem[i].style.display = "none";
    }
    carouselIndex++;
    if (carouselIndex > carouselItem.length) { 
        carouselIndex = 1; 
    }
    carouselItem[carouselIndex - 1].style.display = "block";
    setTimeout(carouselHandler, 2000);
}