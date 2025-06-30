// Quotes array with text and category properties
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Success is not final, failure is not fatal.", category: "Inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
  const quoteDiv = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDiv.textContent = "${quote.text}" (${quote.category});
}

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    displayRandomQuote();
  } else {
    alert('Please enter both text and category.');
  }
}

// Event listener for "Show New Quote" button
document.getElementById('showNewQuote').addEventListener('click', displayRandomQuote);

// Event listener for "Add Quote" button
document.getElementById('addQuoteButton').addEventListener('click', addQuote);

// Display a quote on page load
displayRandomQuote();