
let kayz = document.querySelectorAll(".accord");

kayz.forEach((e) => {
   e.addEventListener("click", function(){
     
      let b = this.nextElementSibling;
      b.style.maxHeight ? b.style.maxHeight = null : 
      b.style.maxHeight = b.scrollHeight + "px";
      this.classList.toggle("active");
   });

   
});

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



