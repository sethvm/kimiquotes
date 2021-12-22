module.exports = {
    displaySampleQuote,
    randomQuote,
    selectQuoteByIndex,
    selectQuotesByYear,
    allQuotes,
    numberOfQuotes,
}

function displaySampleQuote(quotes) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    if (quote.year === null) quote.year = '';
    const formattedQuote = `"${quote.quote}" -Kimi Räikkönen${quote.year && `, ${quote.year}`}`;
    return formattedQuote;
}

function randomQuote(quotes) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote;
}

function selectQuoteByIndex(quotes, index) {
    if (!quotes[index]) return '404: no quote found';
    const quote = quotes[index];
    return quote;
}

function selectQuotesByYear(quotes, year) {
    year = parseInt(year);
    const filteredQuotes = quotes.filter(quote => quote.year === year);
    if (filteredQuotes.length === 0) return '404: no quotes found';
    return filteredQuotes;
}

function allQuotes(quotes) {
    return quotes;
}

function numberOfQuotes(quotes) {
    return quotes.length;
}
