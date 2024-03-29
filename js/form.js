const togglebtn = document.getElementById("togglebtn");
const sidebar = document.getElementById("sidebarcontact");
togglebtn.addEventListener("click", ()=>{
  togglebtn.classList.toggle('active');
  sidebar.classList.toggle('active');
})