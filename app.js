const menuOpen = document.getElementById("menuToggle");
const menuClose = document.getElementById("close");
const navLinks = document.getElementById("navLinks");

menuOpen.addEventListener("click", function(){
    navLinks.style.top = "-260px";
    if (navLinks.style.top = "-260px") {
        navLinks.style.top = "0px";
    }
})
menuClose.addEventListener("click", function(){
    navLinks.style.top = "0px";
    if (navLinks.style.top = "0px") {
        navLinks.style.top = "-260px";
    }
})