const sampleQuote = document.getElementById('sampleQuote');
const sampleQuoteDate = document.getElementById('quoteDate');
const quoteResetBtn = document.getElementById('quoteResetBtn');

window.onload = getNewSampleQuote();
quoteResetBtn.addEventListener('click', getNewSampleQuote);

async function getNewSampleQuote() {
    const response = await fetch(`${window.location.href}quote/random`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';
    const formattedQuote = `"${quoteData.quote}"`;
    const formattedQuoteDate = `-Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`;

    sampleQuote.textContent = formattedQuote;
    sampleQuoteDate.textContent = formattedQuoteDate;
}
