// Select elements
const paragraph = document.querySelector('.paragray');
const button = document.getElementById('colorButton');
const clickCounter = document.querySelector('.NumberOfClick');

let count = 0; // Initialize click counter

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for button click
button.addEventListener('click', () => {
    count++; // Increase count on each click
    clickCounter.textContent = count; // Update click count in button text
    paragraph.style.backgroundColor = getRandomColor(); // Set random color
});

