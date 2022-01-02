// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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


// button share FB or TW
function facebookShare(event, url) {
      event.preventDefault();
      window.open(url,'Share','width=700,height=500')
    }

function twitterShare(event, url) {
      event.preventDefault();
      window.open(url,'Share','width=700,height=500')
    }

// change input - add a text to wishes
var space = document.querySelector(".space");
var textInput = document.querySelector(".your_text");
var resetButtons = document.querySelectorAll(".res");


space.addEventListener("change", function(){
  textInput.textContent = space.value;
  });






resetButtons.forEach(button => button.addEventListener("click", function(){
  reset();
}))

function reset(){

textInput.textContent = "";
}