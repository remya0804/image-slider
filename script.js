let prevElement = document.querySelector(".prev");
let nextElement = document.querySelector(".next");

let sliderElement = document.querySelector(".slider");

nextElement.addEventListener('click', () => {

    let slidesArray = document.querySelectorAll(".slide");

    sliderElement.appendChild(slidesArray[0]);

// console.log(slidesArray[]);

// console.log(slidesArray);
})
prevElement.addEventListener('click', () => {

    let slidesArray = document.querySelectorAll(".slide");

    sliderElement.prepend(slidesArray[slidesArray.length-1]);

})