// document selectors
const sampleQuote = document.getElementById('sampleQuote');
const sampleQuoteDate = document.getElementById('sampleQuoteDate');
const quoteResetBtn = document.getElementById('quoteResetBtn');
const tweetBtn = document.getElementById('tweetBtn');
const indexRange = document.getElementById('indexRange');


// interface update listeners
window.onload = () => renderSampleQuote();
quoteResetBtn.addEventListener('click', renderSampleQuote);
tweetBtn.addEventListener('click', tweetQuote);


// fetch functions
async function renderSampleQuote() {
    const response = await fetch(`${window.location.href}quote`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';
    sampleQuote.innerText = `"${quoteData.quote}"`;
    sampleQuoteDate.innerText = `- Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`
}

// tweet function
// tweets have a 280-character limit
// production template can contain up to 58 non-quote characters
function tweetQuote() {
    const encodedQuote = encodeURIComponent(sampleQuote.innerText);
    const encodedQuoteDate = encodeURIComponent(sampleQuoteDate.innerText);
    const siteLink = `https://${window.location.host}`;

    window.open(`https://twitter.com/intent/tweet?text=${encodedQuote}%0A${encodedQuoteDate}%0A%0A&url=${siteLink}`);
}
