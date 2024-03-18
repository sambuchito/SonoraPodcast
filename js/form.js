document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
});

$(document).ready(function(){
    $('.toggle').click(function(){
      $('.sidebar-contact').toggleClass('active')
      $('.toggle').toggleClass('active')
    })
  })