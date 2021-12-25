// document selectors
const sampleQuote = document.getElementById('sampleQuote');
const sampleQuoteDate = document.getElementById('quoteDate');
const quoteResetBtn = document.getElementById('quoteResetBtn');
const indexRange = document.getElementById('indexRange');


// interface update listeners
window.onload = () => {
    renderSampleQuote();
    renderQuoteIndexRange();
}
quoteResetBtn.addEventListener('click', renderSampleQuote);


// fetch functions
async function renderSampleQuote() {
    const response = await fetch(`${window.location.href}quote`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';
    sampleQuote.textContent = `"${quoteData.quote}"`;
    sampleQuoteDate.textContent = `- Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`;
}

async function renderQuoteIndexRange() {
    const response = await fetch(`${window.location.href}quotes`);
    const quoteData = await response.json();

    indexRange.textContent = ` (any value from 0 to ${quoteData.length - 1})`;
}
