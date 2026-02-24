const timerButton = document.getElementById("timerTransport");
const timerDisplay = document.getElementById("timerDisplay");

let intervalId = null;

function getTimeLeft() {
  const now = new Date();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);


  
// math part below

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
