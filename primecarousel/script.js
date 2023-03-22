document.getElementById("left-arrow").addEventListener("click", function() {
    prevSlide();
});

document.getElementById("right-arrow").addEventListener("click", function() {
    nextSlide();
});

nextSlide = () => {
    //transform .card-container in the x direction
    console.log("next slide");
    document.querySelector(".card-container").style.transform = "translateX(-100%)";
}

prevSlide = () => {
    //transform .card-container in the x direction
    console.log("prev slide");
    document.querySelector(".card-container").style.transform = "translateX(0%)";
}