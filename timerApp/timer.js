let totalSeconds = 0;
let intervalId = null;
let isPaused = false;

const timerDisplay = document.getElementById("timer-display");
const alertText = document.getElementById("alert-text");

const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const updateDisplay = () => {
  timerDisplay.innerText = formatTime(totalSeconds);
};

const setTimer = () => {
  const hrs = parseInt(document.getElementById("hours").value || "0");
  const mins = parseInt(document.getElementById("minutes").value || "0");
  const secs = parseInt(document.getElementById("seconds").value || "0");

  totalSeconds = hrs * 3600 + mins * 60 + secs;

  if (totalSeconds <= 0) {
    alert("Please set a valid time.");
    return;
  }

  updateDisplay();
  alertText.innerText = "";
};

const startTimer = () => {
  if (totalSeconds <= 0) return;

  clearInterval(intervalId);
  isPaused = false;

  intervalId = setInterval(() => {
    if (!isPaused) {
      totalSeconds--;
      updateDisplay();

      if (totalSeconds <= 0) {
        clearInterval(intervalId);
        alertText.innerText = "⏳ Time's up!";
        // Optional: play sound
        // new Audio("alert.mp3").play();
      }
    }
  }, 1000);
};

const pauseTimer = () => {
  isPaused = true;
};

const resumeTimer = () => {
  if (totalSeconds <= 0) return;
  isPaused = false;
};

const resetTimer = () => {
  clearInterval(intervalId);
  totalSeconds = 0;
  isPaused = false;
  updateDisplay();
  alertText.innerText = "";
  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
};
s