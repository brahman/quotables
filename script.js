// script.js

// Array of random quotes
const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama"
];

// Function to display a new quote
function showNewQuote() {
  const quoteElement = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Update the quote every 10 seconds
setInterval(showNewQuote, 10000);

// Show the first quote on page load
window.onload = showNewQuote;