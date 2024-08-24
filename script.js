// Define the array
let colors = ['Red', 'Green', 'Blue'];

// Function to display the first and last elements
function displayArrayInfo(array) {
    // Check if the array is not empty
    if (array.length > 0) {
        // Get the first and last elements
        const firstColor = array[0];
        const lastColor = array[array.length - 1];
        
        // Display the information
        console.log(`Thd first color is: ${firstColor}`);
        console.log(`The last color is: ${lastColor}`);
    } else {
        console.log("The array is empty.");
    }
}

// Call the function with the colors array
displayArrayInfo(colors);
