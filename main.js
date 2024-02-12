// 필요한 html elements 다 가져오기
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 10; // 남은 기회
let userValueList = []; // 유저가 입력한 숫자들 리스트

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  // 랜덤숫자 뽑기

  computerNumber = Math.floor(Math.random() * 50) + 1;
  console.log("정답", computerNumber);
}

function play() {
  // 숫자 추측하기
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 50) {
    resultText.textContent = "1부터 50 사이의 숫자를 입력 해주세요";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";

    return;
  }

  chances--;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://donghyup.files.wordpress.com/2018/08/number.jpeg";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://donghyup.files.wordpress.com/2018/08/number.jpeg";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src =
      "https://donghyup.files.wordpress.com/2018/08/number.jpeg";
    resultText.textContent = "정답은 당신의 운명의 번호입니다.";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //리셋
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "https://donghyup.files.wordpress.com/2018/08/number.jpeg";
  resultText.textContent = "별의 순간을 맞추세요";
  gameOver = false;
  playButton.disabled = false;
  chances = 10;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList = [];
}

pickRandomNumber();