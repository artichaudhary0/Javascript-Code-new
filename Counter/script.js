let counterValue = 0;
let counterintervel;
let isCounterrunning = false;

const counterElement = document.getElementById("counter");
const counterProgressBar = document.getElementById("counter-progress-bar");

function updateCounter() {
  counterValue++;
  counterElement.textContent = `Counter : ${counterValue}`;

  const progress = (counterValue % 100) / 100; // limit progress bar to 100%

  counterProgressBar.style.width = `${progress * 100}%`;
}

document.getElementById("startCounter").addEventListener("click", () => {
  if (!isCounterrunning) {
    counterintervel = setInterval(updateCounter, 1000); // 1000milli => 1 sec
    isCounterrunning = true;
  }
});

document.getElementById("pauseCounter").addEventListener("click", () => {
  clearInterval(counterintervel);
  isCounterrunning = false;
});

document.getElementById("resetCounter").addEventListener("click", () => {
  clearInterval(counterintervel);
  isCounterrunning = false;
  counterValue = 0;
  counterElement.textContent = `Counter : ${counterValue}`;
  counterProgressBar.style.width = `0%`;
});

// CountDown

let countDownValue = 10;
let countDownIntervel;
let isCountdownRunning = false;

const countDownElement = document.getElementById("countdown");
const countdownProgressBar = document.getElementById("countdown-progress-bar");

function updateCountdown() {
  if (countDownValue <= 0) {
    clearInterval(countDownIntervel);
    alert("Countdown finish");
    countDownElement.textContent = "Countdown = 0";
    countdownProgressBar.style.width = "0%";
    return;
  }

  countDownValue--;
  countDownElement.textContent = `Countdown : ${countDownValue}`;
  const progress = (countDownValue / initilCountDownTime) * 100;

  countdownProgressBar.style.width = `${progress}%`;
}

let initilCountDownTime;

document.getElementById("startCountdown").addEventListener("click", () => {
  const customTime = document.getElementById("customTime").value || 10; // default to 10 if value not given

  initilCountDownTime = customTime;
  countDownValue = customTime;

  if (!isCountdownRunning) {
    countDownIntervel = setInterval(updateCountdown, 1000);
    isCountdownRunning = false;
  }
});

document.getElementById("pauseCountdown").addEventListener("click", () => {
  clearInterval(countDownIntervel);
  isCountdownRunning = false;
});

document.getElementById("resetCountdown").addEventListener("click", () => {
  clearInterval(countDownIntervel);
  isCountdownRunning = false;
  countDownValue = 10;
  countDownElement.textContent = `Countdown : ${countDownValue}`;
});
