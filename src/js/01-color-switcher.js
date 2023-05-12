const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

startBtn.addEventListener('click', changeColor);

stopBtn.addEventListener('click', clearColor);

stopBtn.disabled = true;

let intervalId = null;

function changeColor() { 
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    isDisabledBtn(true, false);
}

function clearColor() {
    clearInterval(intervalId);
    isDisabledBtn(false, true);
   
}

function isDisabledBtn(startDisabled, stopDisabled) {
    startBtn.disabled = startDisabled;
    stopBtn.disabled = stopDisabled;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
