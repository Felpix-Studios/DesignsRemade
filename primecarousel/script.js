document.getElementById("left-arrow").addEventListener("click", function() {
    prevSlide();
});

document.getElementById("right-arrow").addEventListener("click", function() {
    nextSlide();
});

nextSlide = () => {
    console.log("next slide");
    document.querySelector(".card-container").style.transform += "translateX(-25%)";

}

prevSlide = () => {
    console.log("prev slide");
    document.querySelector(".card-container").style.transform += "translateX(25%)";
}