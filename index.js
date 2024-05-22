
// Base API endpoint for fetching quotes
const api = "https://api.api-ninjas.com/v1/quotes?category=";

// Your API key (replace YOUR_API_KEY with your actual API key)
const apiKey = YOUR_API_KEY;

// Function to handle the button click event
const handleClick = async () => {
  console.log("hii"); // Log a message to the console (for debugging)
  
  // Get the selected category from the dropdown
  var category = document.getElementById("categories");
  var selectedCategory = category.value;

  try {
    // Fetch a quote from the API for the selected category
    const response = await fetch(api + selectedCategory, {
      method: "GET", // HTTP method
      headers: {
        "X-Api-Key": apiKey, // API key for authorization
      },
    });

    // Check if the response is not ok (status code not in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error if not ok
    }

    // Parse the JSON response data
    const data = await response.json();

    // Display the quote text in the quote div
    var quoteDiv = document.getElementById("quote");
    quoteDiv.innerText = data[0].quote;

    // Display the author's name in the writer div
    var writerDiv = document.getElementById("writer");
    writerDiv.innerText = data[0].author;

    // Additional code to update the web page can be added here

  } catch (error) {
    // Log any errors to the console
    console.error("Error fetching the quote:", error);
  }
};

// Add event listener for DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the button element and attach the handleClick function to its click event
  var button = document.getElementById("newQuote");
  button.addEventListener("click", handleClick);
});


