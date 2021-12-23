// document selectors
const sampleQuote = document.getElementById('sampleQuote');
const sampleQuoteDate = document.getElementById('quoteDate');
const quoteResetBtn = document.getElementById('quoteResetBtn');

// display update listeners
window.onload = getQuote();
quoteResetBtn.addEventListener('click', getQuote);

// send GET request to API
async function getQuote() {
    const response = await fetch(`${window.location.href}quote/any`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';

    sampleQuote.textContent = `"${quoteData.quote}"`;
    sampleQuoteDate.textContent = `-Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`;
}
