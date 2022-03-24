//script jquery função owlcarousel
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }

    }
})





var slideIndex = 1;
showSlides(slideIndex);

// controles
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// miniaturas
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("meuSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("descricao");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}