
// Get the modal
var modal = document.getElementById('myModal');

// get the image and inseert it in the modal
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = 
document.getElementById("caption");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on span x close the thing
span.onclick = function() {
    modal.style.display = "none";
}




// Open modal and display the specific img
function openModal(n) {
    document.getElementById("modal").style.display = "block";
    showSlides(slideIndex = n);
}

// Close modal 
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

var slideIndex;
showSlides(slideIndex = 1);

// Next/previouscontrols
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Img display 
function showSlides(n) {
    var slides = document.getElemnetsByClassName("mySlides");
    if (n > slides.lenght) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.lenght}
    for (i = 0; i < slides.leght; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}