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




