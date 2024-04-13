// Image slider

const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
 if(slides.length > 0){
    slides[slideindex].classList.add("displaySlide");
    intervalId =  setInterval(next, 3000);
    
 }
       
}
function ShowSlide(index){

    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = slides.length - 1;
    }
    slides.forEach((slide)=>{
        slide.classList.remove("displaySlide");
    });
    slides[slideindex].classList.add("displaySlide");
}
function prev(){
    clearInterval(intervalId);
    slideindex--;
    ShowSlide(slideindex);
}
    
function next(){
    slideindex++;
    ShowSlide(slideindex);
}