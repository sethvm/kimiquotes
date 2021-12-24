// document selectors
const sampleQuote = document.getElementById('sampleQuote');
const sampleQuoteDate = document.getElementById('quoteDate');
const quoteResetBtn = document.getElementById('quoteResetBtn');
const quoteCount = document.getElementById('quoteCount');
const indexRange = document.getElementById('indexRange');


// interface update listeners
window.onload = () => {
    renderSampleQuote();
    renderQuoteCount();
}
quoteResetBtn.addEventListener('click', renderSampleQuote);


// fetch functions
async function renderSampleQuote() {
    const response = await fetch(`${window.location.href}quote`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';
    sampleQuote.textContent = `"${quoteData.quote}"`;
    sampleQuoteDate.textContent = `-Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`;
}

async function renderQuoteCount() {
    const response = await fetch(`${window.location.href}quotes`);
    const quoteData = await response.json();

    quoteCount.textContent = `Database currently contains ${parseInt(quoteData.length)} quotes`;
    indexRange.textContent = ` (any value from 0 to ${quoteData.length - 1})`;
}
