
const menuBtn = document.querySelector(".menu-icon");
const navberMsBox = document.querySelector("#mean-toggle");

let turn0 = true;
 
handler = () => {
    console.log("menuBtn was clicked");
    if (turn0 === true){

        navberMsBox.style.display = "block";
        turn0 = false;
        console.log("mentBtn display block");
    }
    else{
        navberMsBox.style.display = "none";
        turn0 = true;
        console.log("mentBtn display none");
    }    
};
menuBtn.addEventListener("click",handler);




                // Themes Start
        // ** first
const carousel = document.querySelector(".theme-box");
const arrowBtns = document.querySelectorAll(".theme-btn");
const firstCardWidth = carousel.querySelector(".theme-boxs-ma-pa").offsetWidth;

let isDragging = false, startX, startScrollLeft;


arrowBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    console.log("dragstart");
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousemove", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


                // Themes End







