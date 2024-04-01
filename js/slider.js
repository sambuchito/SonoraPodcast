const slides = document.getElementsByClassName("pic");
const dots = document.getElementsByClassName("dot");
let slideIndex = 0;

document.getElementById("next_btn").addEventListener("click", () => {
  slideIndex += 1;
  showSlides(slideIndex);
});

document.getElementById("prev_btn").addEventListener("click", () => {
  slideIndex -= 1;
  showSlides(slideIndex);
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    showSlides(i);
  });
}

function showSlides(n) {
  if (n >= slides.length) { slideIndex = 0 }
  else if (n < 0) { slideIndex = slides.length - 1 }
  else {slideIndex = n}
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}