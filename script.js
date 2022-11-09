/*Create a Carousel/Slideshow with 6 different images of  your choice. Ensure the following:
The images are properly styled.
*/
//write a function for next and previous buttons
//write a function for the dots

let slideIndex = 1;
showSlides(slideIndex);
//A function for showing slides

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function presentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let mySlides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if(n > mySlides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = mySlides.length}

    for(let i =0; i< mySlides.length; i++){
        mySlides[i].style.display = "none";
    }
    for(let i =0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    mySlides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active";
}
