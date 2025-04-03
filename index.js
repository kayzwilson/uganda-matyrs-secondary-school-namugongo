let slideIndex = 0;
showslides();
function showslides(){
    let slides = document.querySelectorAll(".slideshow");
    let dots = document.querySelectorAll(".dot")

    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showslides, 5000);

}

function changeSlide(n) {
    slideIndex += n-1 ;
    showslides();
}

function currentSlide(n) {
    slideIndex = n -1;
    showslides();
}

const navbar = document.querySelector(".nav-move");
const menu = document.querySelector(".menu");
menu.addEventListener("click", function(){
   navbar.style.width ? navbar.style.width = null :
    navbar.style.width = "50%";
    
})

const darkmode = document.getElementById("darkmode");
const headteacher = document.getElementById("headteacher");
const changes = document.querySelectorAll(".changes");

darkmode.addEventListener("click", function(){
   document.body.classList.toggle("newmode");
   headteacher.classList.toggle("newmode")
   changes.forEach(e => e.classList.toggle("newmode"));
   
})
