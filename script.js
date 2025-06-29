// ===================
// Quotes Data Model
// ===================
const quotes = [
    { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
    { text: "Knowledge is power.", category: "Education" },
    { text: "To be or not to be, that is the question.", category: "Philosophy" }
  ];
  
  // ===================
  // DOM Elements
  // ===================
  const quoteDisplay = document.getElementById('quoteDisplay');
  const newQuoteButton = document.getElementById('newQuote');
  const addQuoteFormContainer = document.getElementById('addQuoteFormContainer');
  
  // ===================
  // Function: showRandomQuote
  // ===================
  function showRandomQuote() {
    if (quotes.length === 0) {
      quoteDisplay.textContent = "No quotes available.";
      return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.textContent = "${quote.text}" — Category: ${quote.category};
  }
  
  // ===================
  // Function: createAddQuoteForm
  // ===================
  function createAddQuoteForm() {
    // Clear existing form
    addQuoteFormContainer.innerHTML = '';
  
    // Create form element
    const form = document.createElement('form');
  
    // Input for quote text
    const quoteInput = document.createElement('input');
    quoteInput.id = 'newQuoteText';
    quoteInput.type = 'text';
    quoteInput.placeholder = 'Enter a new quote';
    quoteInput.required = true;
  
    // Input for category
    const categoryInput = document.createElement('input');
    categoryInput.id = 'newQuoteCategory';
    categoryInput.type = 'text';
    categoryInput.placeholder = 'Enter quote category';
    categoryInput.required = true;
  
    // Add button
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'Add Quote';
  
    // Append inputs and button to form
    form.appendChild(quoteInput);
    form.appendChild(categoryInput);
    form.appendChild(addButton);
  
    // Add event listener
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      addQuote();
    });
  
    // Add form to container
    addQuoteFormContainer.appendChild(form);
  }
  
  // ===================
  // Function: addQuote
  // ===================
  function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value.trim();
    const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();
  
    if (newQuoteText && newQuoteCategory) {
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
      alert('Quote added successfully!');
      createAddQuoteForm();  // reset form
    } else {
      alert('Please enter both a quote and a category.');
    }
  }
  
  // ===================
  // Initialize
  // ===================
  newQuoteButton.addEventListener('click', showRandomQuote);
  createAddQuoteForm();