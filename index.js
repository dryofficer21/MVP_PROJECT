// Function to append the clicked value to the display
function appendtodisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function cleardisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the expression
function calculate() {
    try {
        // Evaluate the expression and store the result in the display
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        // If there is an error in the expression, show 'Error'
        document.getElementById('display').value = 'Error';
    }
}
