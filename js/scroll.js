const navbar = document.getElementById("navbar");
const logo1 = document.getElementById("nav_logo1");
const logo2 = document.getElementById("nav_logo2");
console.log(navbar)
let scrolled = false;
window.onscroll = () => {
    let last_scrolled = false;
    last_scrolled = scrolled;
    if (window.scrollY>80){
        scrolled = true;
    }else{
        scrolled = false;
    }
    if (last_scrolled!=scrolled){
        if (!navbar.classList.contains("nav_hidden")&&scrolled){
            navbar.classList.add("nav_hidden");
            logo1.classList.add("logo_hidden");
            logo2.classList.remove("logo_hidden");
        }else{
            navbar.classList.remove("nav_hidden")
            logo1.classList.remove("logo_hidden")
            logo2.classList.add("logo_hidden")
        }
    }
    
}
