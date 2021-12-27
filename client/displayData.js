// document selectors
const sampleQuote = document.getElementById('sampleQuote');
const quoteResetBtn = document.getElementById('quoteResetBtn');
const tweetBtn = document.getElementById('tweetBtn');
const indexRange = document.getElementById('indexRange');


// interface update listeners
window.onload = () => {
    renderSampleQuote();
    renderQuoteIndexRange();
}
quoteResetBtn.addEventListener('click', renderSampleQuote);
tweetBtn.addEventListener('click', tweetQuote);


// fetch functions
async function renderSampleQuote() {
    const response = await fetch(`${window.location.href}quote`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';
    sampleQuote.innerText = `"${quoteData.quote}"\n\n- Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`;
}

async function renderQuoteIndexRange() {
    const response = await fetch(`${window.location.href}quotes`);
    const quoteData = await response.json();

    indexRange.innerText = ` (any value from 0 to ${quoteData.length - 1})`;
}

// tweet function
// template contains 76 non-quote characters
function tweetQuote() {
    const encodedQuote = encodeURIComponent(sampleQuote.innerText);
    const siteLink = `https://${window.location.host}`;
    const hashtags = `Bwoah,KimiRaikkonen,F1`;

    window.open(`https://twitter.com/intent/tweet?text=${encodedQuote}%0A%0A${siteLink}%0A%0A&hashtags=${hashtags}`);
}
