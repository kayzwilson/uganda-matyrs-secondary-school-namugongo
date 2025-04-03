const navbar = document.querySelector(".nav-move");
const menu = document.querySelector(".menu");
menu.addEventListener("click", function(){
   navbar.style.width ? navbar.style.width = null :
    navbar.style.width = "50%";   
})

function showContent(sectionId, element) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = "none"; // Hide previous content
    });

    element.classList.add('active');
    const selectedContent = document.getElementById(sectionId);
    selectedContent.style.display = "block"; // Ensure it appears
    setTimeout(() => selectedContent.classList.add('active'), 10); // Add class with delay for smooth transition
}
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".rated_section");
    let currentIndex = 0;
    const visibleSlides = 2;
    const totalSlides = slides.length;

    slides[currentIndex].style.left = "4%";
    let nextIndex = (currentIndex + 1) % totalSlides;
    slides[nextIndex].style.left = "52%";

    function showNext() {
        let oldIndex = currentIndex;
        let newIndex = (currentIndex + visibleSlides) % totalSlides;

        // Move current slides out
        slides[oldIndex].style.transition = "left 1s ease-in-out";
        slides[oldIndex].style.left = "-100%";

        slides[nextIndex].style.transition = "left 1s ease-in-out";
        slides[nextIndex].style.left = "4%";

        // Prepare the next slide before animating
        slides[newIndex].style.transition = "none";
        slides[newIndex].style.left = "100%";

        // Animate the new slide in
        setTimeout(() => {
            slides[newIndex].style.transition = "left 1s ease-in-out";
            slides[newIndex].style.left = "52%";
        }, 50); // Small delay ensures smooth transition

        // Update indices
        currentIndex = nextIndex;
        nextIndex = newIndex;
    }

    setInterval(showNext, 3000);
});



