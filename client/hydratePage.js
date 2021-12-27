// document selectors
const sampleQuote = document.getElementById('sampleQuote');
const sampleQuoteDate = document.getElementById('sampleQuoteDate');
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
    sampleQuote.innerText = `"${quoteData.quote}"`;
    sampleQuoteDate.innerText = `- Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`
}

async function renderQuoteIndexRange() {
    const response = await fetch(`${window.location.href}quotes`);
    const quoteData = await response.json();

    indexRange.innerText = ` (any value from 0 to ${quoteData.length - 1})`;
}

// tweet function
// production template contains 79 non-quote characters
function tweetQuote() {
    const encodedQuote = encodeURIComponent(sampleQuote.innerText);
    const encodedQuoteDate = encodeURIComponent(sampleQuoteDate.innerText);
    const siteLink = `https://${window.location.host}`;

    window.open(`https://twitter.com/intent/tweet?text=${encodedQuote}%0A${encodedQuoteDate}%0A%0A&url=${siteLink}`);
}

// analytics
function handleInteraction(url) {
    ga('send', 'event', 'outbound', 'click', url, {
        'transport': 'beacon',
        'hitCallback': function(){ document.location = url; }
    });
}
