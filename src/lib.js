module.exports = {
    anyQuote,
    selectQuoteByIndex,
    selectQuotesByYear,
    allQuotes,
    numberOfQuotes,
}

function anyQuote(quotes) {
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
    return parseInt(quotes.length);
}
