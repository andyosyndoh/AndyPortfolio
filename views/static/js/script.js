/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home_img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about_img',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200}); 
sr.reveal('.skills_img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work_img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_input',{interval: 200}); 

document.addEventListener("DOMContentLoaded", () => {
    const rotatingText = document.getElementById("rotatingText");

    const quotes = [
        "Software Developer",
        "Web Developer",
        "Web Designer",
        "Frontend Developer",
        "Backend Developer",
    ];

    let index = 0;

    setInterval(() => {
        rotatingText.style.opacity = 0; // Start fade out effect
        setTimeout(() => {
            rotatingText.textContent = quotes[index];
            rotatingText.style.opacity = 1; // Fade in new text
            index = (index + 1) % quotes.length; // Loop back to start
        }, 500); // Allow half a second for fade out before updating text
    }, 2000);
});


