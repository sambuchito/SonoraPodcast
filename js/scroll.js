const navbar = document.getElementById("navbar");
console.log(navbar)
let scrolled = false;
window.onscroll = () => {
    let last_scrolled = false;
    last_scrolled = scrolled;
    if (window.scrollY>5){
        scrolled = true;
    }else{
        scrolled = false;
    }
    if (last_scrolled!=scrolled){
        if (!navbar.classList.contains("nav_hidden")&&scrolled){
            navbar.classList.add("nav_hidden");
        }else{
            navbar.classList.remove("nav_hidden")
        }
    }
    
}
