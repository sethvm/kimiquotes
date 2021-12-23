const sampleQuote = document.getElementById('sampleQuote')
const quoteResetBtn = document.getElementById('quoteResetBtn')

window.onload = async () => {
    const response = await fetch(`${window.location.href}quote/random`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';
    const formattedQuote = `"${quoteData.quote}" -Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`;

    sampleQuote.textContent = formattedQuote;
}

quoteResetBtn.addEventListener('click', async () => {

    const response = await fetch(`${window.location.href}quote/random`);
    const quoteData = await response.json();

    if (quoteData.year === null) quoteData.year = '';
    const formattedQuote = `"${quoteData.quote}" -Kimi Räikkönen${quoteData.year && `, ${quoteData.year}`}`;

    sampleQuote.textContent = formattedQuote;
})
