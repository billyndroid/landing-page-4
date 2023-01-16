let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrowRight'),
    arrowRight = document.querySelector('#arrowLeft'),
    current = 0;

//clear all images
function reset(){
    for(let i = 0; i <  sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

startSlide();