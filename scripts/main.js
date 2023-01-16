function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }


//slideshow 
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}
//init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}
//show prev
function slideLeft(){
  reset();
  sliderImages[current -1].style.display = 'block';
  current--;
}

//Show next
function slideRight(){
  reset();
  sliderImages[current +1].style.display = 'block';
  current++;
}

//Left arrow click
arrowLeft.addEventListener('click', function(){
if(current === 0){
  current = sliderImages.length;
}
slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length -1){
    current = -1;
  }
  slideRight();
  });
  
startSlide();



/*slideshow*/
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
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
