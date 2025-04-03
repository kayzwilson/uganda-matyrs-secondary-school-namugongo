const next = document.querySelector(".next");
const sections = Array.from(document.querySelectorAll(".news_latest .latest_section"));
const visibleCount = 3;  
const previous = document.querySelector(".previous");
let currentIndex = 0;

next.addEventListener("click", function(){
    sections[currentIndex].style.opacity = "0";
    setTimeout(()=>{
        sections[currentIndex].classList.add("hidden");
        let lastVisIndex = (currentIndex + visibleCount - 1);
        let nextIndex = (lastVisIndex + 1);
        sections[nextIndex].classList.remove("hidden");
        sections[nextIndex].style.opacity = "1";
        currentIndex = (currentIndex + 1);
        if (currentIndex === 3) {
            next.style.display = "none";
        }
    },400) 
    previous.style.display = "block";
})

previous.addEventListener("click", function(){
    let lastVIndex = (currentIndex + visibleCount - 1);
    sections[lastVIndex].style.opacity = "0";
    setTimeout(()=>{
        sections[lastVIndex].classList.add("hidden");
         let latestvisisble = (currentIndex - 1);
         sections[latestvisisble].classList.remove("hidden");
         sections[latestvisisble].style.opacity = "1";
         currentIndex =(currentIndex - 1);
         if (currentIndex === 0) {
            previous.style.display = "none";
        }
    }, 400)
   next.style.display = "block"
})

document.addEventListener("DOMContentLoaded", function(){
   const slides = document.querySelectorAll(".duty_section");
   let currentIndex = 0;
  
   slides[currentIndex].style.left = "10%";
   
   function showNext(){
     slides[currentIndex].style.transition = "left 1s ease-in-out";
     slides[currentIndex].style.left = "-100%"

     currentIndex = (currentIndex + 1) % slides.length;

     slides[currentIndex].style.transition = "none";
     slides[currentIndex].style.left = "100%";
     setTimeout(() => {
        slides[currentIndex].style.transition = "left 1s ease-in-out";
        slides[currentIndex].style.left = "10%";
    }, 50);
    
   }
   setInterval(showNext, 3500);
})

const calendarGrid = document.getElementById('calendar');
const current = document.getElementById('currentDate');
let currentDate = new Date();

    function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDay = firstDayOfMonth.getDay();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    current.textContent = months[month]+" "+year;
   
    calendarGrid.innerHTML = ''; 
    for(let i=0;i<7;i++){
        const newCell = document.createElement("div");
        newCell.innerHTML = days[i];
        newCell.classList = "calendar-days";
        calendarGrid.appendChild(newCell);
        
    }

    
    for (let i = 0; i < firstDay; i++) {
        const newCell = document.createElement("div");
        calendarGrid.appendChild(newCell);
        
    }


    for (let day = 1; day <= daysInMonth; day++) {
        var newCell = document.createElement("div");
        newCell.innerHTML=day;
        calendarGrid.appendChild(newCell);
        
    }
    const dayCells = calendarGrid.querySelectorAll('div');
    
    for(let i=0;i<dayCells.length;i++){
        
        dayCells[i].addEventListener('click', (day) => {
            if (day.target.innerText !== "") {
                alert(`You clicked on ${day.target.innerText}`);
            }
        });
    }
        
}


function changeMonth(change) {
    currentDate.setMonth(currentDate.getMonth() + change);
    renderCalendar();
}
function todayDate() {
    currentDate = new Date();
    renderCalendar();
}
renderCalendar();

const verify = document.querySelectorAll(".container input")
const submit = document.querySelector(".signupbutton");

function checkVerify(){
    const allFilled = Array.from(verify).every(input => input.value.trim() !== "");

    if (allFilled) {
        submit.classList.add("enabled");
        
    } else {
        submit.classList.remove("enabled");
       
    }
}

verify.forEach(input => {
    input.addEventListener("input", checkVerify);
});


const navbar = document.querySelector(".nav-move");
const menu = document.querySelector(".menu");
menu.addEventListener("click", function(){
   navbar.style.width ? navbar.style.width = null :
    navbar.style.width = "50%";
    
})

function showpassword1() {
  let password = document.querySelector(".password1");
  let showpassword = document.querySelector(".viewpass1");

 

  if (password.type === "password") {
    password.type = "text";
   
  
} else {
    password.type = "password";
    
}

}




