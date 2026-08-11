const menuToggle=document.getElementById("menuToggle");
const navMenu=document.querySelector(".nav-menu");

menuToggle.addEventListener("click",()=>{
  navMenu.classList.toggle("active");
  menuToggle.textContent=navMenu.classList.contains("active")?"✕":"☰";
});

document.querySelectorAll(".nav-menu a").forEach(link=>{
  link.addEventListener("click",()=>{
    navMenu.classList.remove("active");
    menuToggle.textContent="☰";
  });
});

const animatedElements=document.querySelectorAll(".benefit-card,.about-grid,.contact-box");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.15});

animatedElements.forEach(element=>{
  element.classList.add("hidden");
  observer.observe(element);
});

const footerText=document.querySelector("footer p");
footerText.textContent=`© ${new Date().getFullYear()} NazwaHydroponik. Growing a greener future.`;
