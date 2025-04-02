const input = document.querySelectorAll(".form_container .verify");
const submit = document.querySelector(".submit");

function checkinput(){
    const Allinput = Array.from(input).every(member => member.value.trim() !== "");
    if (Allinput) {
        submit.classList.add("enabled");
    } else{
        submit.classList.remove("enabled");
    }
    
}
input.forEach(member => {
    member.addEventListener("input", checkinput);
});

const navbar = document.querySelector(".nav-move");
const menu = document.querySelector(".menu");
menu.addEventListener("click", function(){
   navbar.style.width ? navbar.style.width = null :
    navbar.style.width = "50%";
    
})