const galleryImages = document.querySelectorAll(".gallery-container img");
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");

        galleryImages.forEach(img => {
            img.addEventListener("click", function() {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
            });
        });

        function closeLightbox() {
            lightbox.style.display = "none";
        }

        // Close lightbox when clicking outside the image
        lightbox.addEventListener("click", function(event) {
            if (event.target !== lightboxImg) {
                closeLightbox();
            }
        });
        const navbar = document.querySelector(".nav-move");
const menu = document.querySelector(".menu");
menu.addEventListener("click", function(){
   navbar.style.width ? navbar.style.width = null :
    navbar.style.width = "50%";
    
})
