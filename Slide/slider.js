// slider logic

const slides = document.querySelector(".slides");

const sliderCount = document.querySelectorAll(".slide").length;

let currentSlide = 0;

const intervelTime = 3000; // 3 seconds

let slideIntervel;

// move to the next slide

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderCount; // 1%3 = 1  2%3 = 2 3%3 = 0 4%3 = 1 5%3 = 2 6%3 = 0
  updateSlider();
}

// move to the previous slide

function previousSlide() {
  currentSlide = (currentSlide - 1 + sliderCount) % sliderCount;
  /*
  0 = (0-1+3) % 3 => 2%3= 2
  1 = (2 - 1 + 3) % 3 => 4%3 => 1
  = (1 - 1 + 3 ) % 3 => 3%3 => 0
  */
  updateSlider();
}

function updateSlider() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// automatic update slider position
function startStart() {
  slideIntervel = setInterval(nextSlide, intervelTime);
}

// automatic update slider position
function stopSlider() {
  clearInterval(slideIntervel);
}

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  stopSlider();
  startStart();
});

document.querySelector(".prev").addEventListener("click", () => {
  previousSlide();
  stopSlider();
  startStart();
});

startStart();

const model = document.getElementById("myModel");

const closeModelBtn = document.getElementById("closeModel");

// show model after 5 sec
setTimeout(() => {
  model.style.display = "flex";
}, 5000);

// close the model

closeModelBtn.addEventListener("click", () => {
  model.style.display = "none";
});
