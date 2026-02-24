const timerButton = document.getElementById("timerTransport");
const timerDisplay = document.getElementById("timerDisplay");

let intervalId = null;

const dangerThreshold = 120;
const warningThreshold = 300;

function getTimeLeft() {
  const now = new Date();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  

  const diffMs = endOfDay - now; // finds time till end of day
  if (diffMs <= 0) {
    return { minutes: 0, seconds: 0 };
  }

  const diffSeconds = Math.floor(diffMs / 1000); //converts to seconds
  const minutes = Math.floor(diffSeconds / 60); //converts to minutes
  const seconds = diffSeconds % 60; //uses modulus operator to calculate remainder time

  return { minutes, seconds }; //outputs
}

function updateTimer() {
  const { minutes, seconds } = getTimeLeft();

  timerDisplay.classList.remove("timer-normal");
  timerDisplay.classList.remove("timer-warning");
  timerDisplay.classList.remove("timer-danger");

  if (minutes <= dangerThreshold) {
timerDisplay.classList.add("timer-danger");
  } else if (minutes <= warningThreshold) {
timerDisplay.classList.add("timer-warning");
  } else {
    timerDisplay.classList.add("timer-normal");
  }
  
  timerDisplay.textContent =
    `You have ${minutes} minutes, ${seconds.toString().padStart(2, "0")} seconds left in your day.`;
  
  if (minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
  }

}

timerButton.addEventListener("click", () => {
  if (intervalId !== null) return; // to prevent multiple intervals
  updateTimer(); //run once immediately
  intervalId = setInterval(updateTimer, 1000);
});
