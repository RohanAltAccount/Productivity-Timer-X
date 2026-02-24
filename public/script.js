const timerButton = document.getElementById("timerTransport");
function getTimeLeft() {
  const now = new Date();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999); // today at 23:59:59.999
  
// this is the math part vvvv
  const diffMs = endOfDay - now; // difference in milliseconds
  const diffSeconds = Math.floor(diffMs / 1000); //converts to seconds
  const minutes = Math.floor(diffSeconds / 60); //converts to minutes 
  const seconds = diffSeconds % 60; //uses mod to calculate remainder of remaining seconds
  return { minutes, seconds }; //outputs
}
function showTimeLeft() {
  const { minutes, seconds } = getTimeLeft();
  alert(`You've got ${minutes} minutes, ${seconds} seconds left in your day.`);
} //shows the countdown and stuff
timerButton.addEventListener("click", showTimeLeft); //click handler

