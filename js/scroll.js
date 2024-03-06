const headerbar = document.getElementById("navbar");
let scrolled = false;
window.onscroll = () => {
    let last_scrolled = scrolled;
    if (window.scrollY>0){
        scrolled = true;
    }else{
        scrolled = false;
    }
    if (last_scrolled != scrolled){
        headerbar.className;
    }
}