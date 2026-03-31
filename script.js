                // Navber Start
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
                // Navber End
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

                //Domestic & International Packages Slider Start
        // Domestic
const domesticSlider = document.querySelector("#domestic-sliderTrack");
const domesticLeftBtn = document.querySelector(".domestic-left-btn");
const domesticRightBtn = document.querySelector(".domestic-right-btn");
const domesticItem = document.querySelector(".domestic-image");

let domesticItemWidth;
const updateDomesticWidth = () => {
    domesticItemWidth = domesticItem.offsetWidth + 16;
};
updateDomesticWidth();
window.addEventListener("resize", updateDomesticWidth);

    // Right Btn
domesticRightBtn.addEventListener("click", () => {
    console.log("Right click");
    domesticSlider.style.transition = "transform 0.5s ease";
    domesticSlider.style.transform = `translateX(-${domesticItemWidth}px)`;

    setTimeout(() => {
        domesticSlider.style.transition = "none";

        domesticSlider.appendChild(domesticSlider.firstElementChild);

        domesticSlider.style.transform = "translateX(0)";

        domesticSlider.offsetHeight;

        domesticSlider.style.transition = "transform 0.5s ease";
    }, 500);
});
    // Left Btn
domesticLeftBtn.addEventListener("click", () => {
    console.log("Left click");
    domesticSlider.style.transition = "none";

    domesticSlider.prepend(domesticSlider.lastElementChild);

    domesticSlider.style.transform = `translateX(-${domesticItemWidth}px)`;

    domesticSlider.offsetHeight;

    domesticSlider.style.transition = "transform 0.5s ease";
    domesticSlider.style.transform = "translateX(0)";
});

    // Touch Swiper
let domesticStart = 0;
let domesticCurrent = 0;
let domesticDiff;

const domesticDragStart = (e) => {
    console.log("mousedown dragStart");
    domesticStart = e.clientX;
};
const domesticDragStop = () => {
    console.log("mouseup dragStop");
    domesticDiff = domesticStart - domesticCurrent;

    if (domesticDiff > 20){
        domesticRightBtn.click();   // move next slide
    }
    else if (domesticDiff < -20){
        domesticLeftBtn.click();    // move previous slide
    }
};
const domesticMouseMove = (e) => {
    domesticCurrent = e.clientX;
};

domesticSlider.addEventListener("mousedown", domesticDragStart);
domesticSlider.addEventListener("mouseup", domesticDragStop);
domesticSlider.addEventListener("mousemove", domesticMouseMove);
// domesticSlider.addEventListener("mouseleave", domesticMouseLeave);


        // International
const internationalSlider = document.querySelector("#international-sliderTrack");
const internationalLeftBtn = document.querySelector(".international-left-btn");
const internationalRightBtn = document.querySelector(".international-right-btn");
const internationalItem = document.querySelector(".international-image");

let internationalItemWidth;
const updateInternationalWidth = () => {
    internationalItemWidth = internationalItem.offsetWidth + 16;
};
updateInternationalWidth();
window.addEventListener("resize", updateInternationalWidth);

    // Right Btn
internationalRightBtn.addEventListener("click", () => {
    console.log("Right click");
    internationalSlider.style.transition = "transform 0.5s ease";
    internationalSlider.style.transform = `translateX(-${internationalItemWidth}px)`;

    setTimeout(() => {
        internationalSlider.style.transition = "none";

        internationalSlider.appendChild(internationalSlider.firstElementChild);

        internationalSlider.style.transform = "translateX(0)";

        internationalSlider.offsetHeight;

        internationalSlider.style.transition = "transform 0.5s ease";
    }, 500);
});
    // Left Btn
internationalLeftBtn.addEventListener("click", () => {
    console.log("Left click");
    internationalSlider.style.transition = "none";

    internationalSlider.prepend(internationalSlider.lastElementChild);

    internationalSlider.style.transform = `translateX(-${internationalItemWidth}px)`;

    internationalSlider.offsetHeight;

    internationalSlider.style.transition = "transform 0.5s ease";
    internationalSlider.style.transform = "translateX(0)";
});

    // Touch Swiper
let internationalStart = 0;
let internationalCurrent = 0;
let internationalDiff;

const internationalDragStart = (e) => {
    console.log("mousedown dragStart");
    internationalStart = e.clientX;
};
const internationalDragStop = () => {
    console.log("mouseup dragStop");
    internationalDiff = internationalStart - internationalCurrent;

    if (internationalDiff > 20){
        internationalRightBtn.click();   // move next slide
    }
    else if (internationalDiff < -20){
        internationalLeftBtn.click();    // move previous slide
    }
};
const internationalMouseMove = (e) => {
    internationalCurrent = e.clientX;
};

internationalSlider.addEventListener("mousedown", internationalDragStart);
internationalSlider.addEventListener("mouseup", internationalDragStop);
internationalSlider.addEventListener("mousemove", internationalMouseMove);

                // Domestic & International Packages Slider End

                // Recent Trips Start
const recentTripSlider = document.querySelector("#recentTrip-sliderTrack");
const recentTripLeftBtn = document.querySelector(".recentTrip-left-btn");
const recentTripRightBtn = document.querySelector(".recentTrip-right-btn");
const recentTripItem = document.querySelector(".recentTrip-image");

let recentTripItemWidth;
const updateRecentTripWidth = () => {
    recentTripItemWidth = recentTripItem.offsetWidth + 16;
};
updateRecentTripWidth();
window.addEventListener("resize", updateRecentTripWidth);

    // Right Btn
recentTripRightBtn.addEventListener("click", () => {
    console.log("Right click");
    recentTripSlider.style.transition = "transform 0.5s ease";
    recentTripSlider.style.transform = `translateX(-${recentTripItemWidth}px)`;

    setTimeout(() => {
        recentTripSlider.style.transition = "none";

        recentTripSlider.appendChild(recentTripSlider.firstElementChild);

        recentTripSlider.style.transform = "translateX(0)";

        recentTripSlider.offsetHeight;

        recentTripSlider.style.transition = "transform 0.5s ease";
    }, 500);
});
    // Left Btn
recentTripLeftBtn.addEventListener("click", () => {
    console.log("Left click");
    recentTripSlider.style.transition = "none";

    recentTripSlider.prepend(recentTripSlider.lastElementChild);

    recentTripSlider.style.transform = `translateX(-${recentTripItemWidth}px)`;

    recentTripSlider.offsetHeight;

    recentTripSlider.style.transition = "transform 0.5s ease";
    recentTripSlider.style.transform = "translateX(0)";
});

    // Touch Swiper
let recentTripStart = 0;
let recentTripCurrent = 0;
let recentTripDiff;

const recentTripDragStart = (e) => {
    console.log("mousedown dragStart");
    recentTripStart = e.clientX;
};
const recentTripDragStop = () => {
    console.log("mouseup dragStop");
    recentTripDiff = recentTripStart - recentTripCurrent;

    if (recentTripDiff > 20){
        recentTripRightBtn.click();   // move next slide
    }
    else if (recentTripDiff < -20){
        recentTripLeftBtn.click();    // move previous slide
    }
};
const recentTripMouseMove = (e) => {
    recentTripCurrent = e.clientX;
};

recentTripSlider.addEventListener("mousedown", recentTripDragStart);
recentTripSlider.addEventListener("mouseup", recentTripDragStop);
recentTripSlider.addEventListener("mousemove", recentTripMouseMove);

                // Recent Trips End




        