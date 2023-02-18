const date = document.getElementById("date");
const userInput = document.getElementById("userInput");
const cpuInput = document.getElementById("cpuInput");
const submitButton = document.querySelector(".submit");
const gameInfoSpan = document
  .querySelector(".gameInfo")
  .getElementsByTagName("span");
let gameOver = false;
let userInputValue;
let cpuInputValue;

// Date Logic
setInterval(() => {
  let dateCurrent = new Date();
  let localCurrentDate = dateCurrent.toLocaleTimeString();
  date.innerHTML = localCurrentDate;
}, 1000);

// random Number funtion
const randomNumberFunction = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// submit button logic
submitButton.addEventListener("click", (e) => {
  userInputValue = userInput.value;
  e.target.classList.add("submitClicked");
  setTimeout(() => {
    e.target.classList.remove("submitClicked");
  }, 100);
  if (userInputValue !== "") {
    let randomNumber = randomNumberFunction(0, 2);
    cpuInputValue = ["Stone", "Paper", "Scissor"][randomNumber];
    cpuInput.value = cpuInputValue;
  }
  if (cpuInputValue === userInputValue) {
    gameInfoSpan[0].innerHTML = "Draw";
  } else if (cpuInputValue === "Stone" && userInputValue === "Paper") {
    gameInfoSpan[0].innerHTML = "You Win";
  } else if (cpuInputValue === "Stone" && userInputValue === "Scissor") {
    gameInfoSpan[0].innerHTML = "Cpu Win";
  } else if (cpuInputValue === "Paper" && userInputValue === "Scissor") {
    gameInfoSpan[0].innerHTML = "You Win";
  } else if (cpuInputValue === "Paper" && userInputValue === "Stone") {
    gameInfoSpan[0].innerHTML = "Cpu Win";
  } else if (cpuInputValue === "Scissor" && userInputValue === "Stone") {
    gameInfoSpan[0].innerHTML = "You Win";
  } else if (cpuInputValue === "Scissor" && userInputValue === "Paper") {
    gameInfoSpan[0].innerHTML = "Cpu Win";
  }
});
