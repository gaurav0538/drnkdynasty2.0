// Get the mode toggle button and body element
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Add a click event listener to the button
toggleButton.addEventListener('click', function () {
    // Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');

    // Update the text on the toggle button
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = 'Toggle Light Mode';
    } else {
        toggleButton.innerHTML = 'Toggle Dark Mode';
    }
});