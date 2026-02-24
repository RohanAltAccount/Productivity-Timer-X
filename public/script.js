// Check if the button and timer elements exist
const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timerDisplay');

if (!startButton || !timerDisplay) {
    console.error('Button or timer display element not found!');
} else {
    startButton.addEventListener('click', function() {
        console.log('Start button clicked!');
        // Logic for starting timer
        if (timerDisplay) {
            // Assuming timer logic here
            console.log('Timer started.');
            timerDisplay.innerText = 'Timer started!';
        }
    });
}