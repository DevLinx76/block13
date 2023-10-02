/* Forward loop */
// This function takes in a yard value and returns its equivalent in meters.
// We're using the conversion factor 0.9144 to convert from yards to meters.
function convertToMeters(yards) {
    return yards * 0.9144;
}

// This function generates a message based on the yard input and its conversion in meters.
// It checks specific yard values (like 1760, 100, 26, 1) to give special messages.
// Otherwise, it gives a generic message.
function createMessage(yards, meters) {
    let message = '';  // This will store our special or generic message
    
    if (yards === 1760) {
        message = 'That\'s as long as a mile!';
    } else if (yards === 100) {
        message = 'That\'s as long as a football field!';
    } else if (yards === 26) {
        message = 'That\'s as long as a tennis court!';
    } else if (yards === 1) {
        message = 'That\'s as long as a washing machine!';
    } else {
        message = 'Interesting choice!';  // Generic message for unspecified yard values
    }

    // This returns a full message, combining the special/generic message with the conversion result.
    return `${yards} yards is approximately ${meters.toFixed(2)} meters. ${message}`;
}

// This function is triggered when the user clicks the "Convert" button.
// It reads the value from the input field, performs the conversion, 
// and updates the output paragraph with the conversion result.
function convertAndDisplay() {
    const yardsValue = parseFloat(document.getElementById('yardsInput').value);  // Gets the yard value from the input field and converts it to a float (number with decimals).
    
    // Check if the user's input is a number
    if (!isNaN(yardsValue)) {
        const metersValue = convertToMeters(yardsValue);  // Convert the yard input to meters using our defined function.
        
        // Update the output paragraph with the result from our createMessage function.
        document.getElementById('outputMessage').innerText = createMessage(yardsValue, metersValue);
    } else {
        // If the user's input isn't a valid number, show an error message.
        document.getElementById('outputMessage').innerText = "Please enter a valid number!";
    }
}
