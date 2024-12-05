// Function to greet the user
function greetUser() {
    // Prompt the user to enter their name
    const userName = prompt("Please enter your name:");
  
    // Check if the user entered a name
    if (userName) {
      // Display the greeting message in the <p> element
      document.getElementById("greeting").innerText = `Hello, ${userName}! Welcome to our website.`;
    } else {
      // If no name is entered, show a default message
      document.getElementById("greeting").innerText = "Hello! Welcome to our website.";
    }
  }
  