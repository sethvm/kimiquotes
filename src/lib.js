module.exports = {
    getAnyQuote,
    getQuoteByIndex,
    getAllQuotes,
    getQuotesByYear
}

function getAnyQuote(arr) {
    const quote = arr[Math.floor(Math.random() * arr.length)];
    return quote;
}

function getQuoteByIndex(arr, index) {
    if (!arr[index]) return 404;
    const quote = arr[index];
    return quote;
}

function getAllQuotes(arr) {
    return arr;
}

function getQuotesByYear(arr, year) {
    const filteredQuotes = arr.filter(quote => quote.year === parseInt(year));
    if (filteredQuotes.length === 0) return 404;
    return filteredQuotes;
}
