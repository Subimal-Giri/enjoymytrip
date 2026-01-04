const left =document.querySelector(".left");
const right =document.querySelector(".right");
const slider =document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1;
const length = images.length;

right.addEventListener("click",() => {
    if (slideNumber < length){
        nextSlide();
    }
    else{
        getFirstSlide();
    }    
});

const nextSlide = () => {
    console.log("right btn click");
    slider.style.transform = `translateX(-${slideNumber*500}px)`;
    slideNumber++;
};
const getFirstSlide = () => {
    console.log("right btn click");
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};


left.addEventListener("click",() => {
    if (slideNumber > 1){
        prevSlide();
    }
    else{
        getLastSlide();
    }    
});

const prevSlide = () => {
    console.log("left btn click");
    slider.style.transform = `translateX(-${(slideNumber - 2)*500}px)`;
    slideNumber--;
};
const getLastSlide = () => {
    console.log("left btn click");
    slider.style.transform = `translateX(-${(length - 1)*500}px)`;
    slideNumber = length;
};


