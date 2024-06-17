let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

const scrollButton = document.getElementById('scrollButton');
const targetSection = document.getElementById('target');

scrollButton.addEventListener('click', function() {
  // Rola para o ponto abaixo da primeira dobra da página
  const firstFoldBottom = window.innerHeight; // Altura da primeira dobra (altura da viewport)
  window.scrollTo({ top: firstFoldBottom, behavior: 'smooth' });
});