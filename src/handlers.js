module.exports = {
    getAllQuotes,
    getQuotesByYear,
    getUnstampedQuotes,
    getQuoteByIndex,
    getAnyQuote
}

function getAllQuotes(arr) {
    return arr;
}

// conditional functions return their respective quote arrays if matches are found
// will return the error code otherwise

function getQuotesByYear(arr, year) {
    const quotes = arr.filter(quote => quote.year === parseInt(year));
    if (quotes.length === 0) return 404;
    return quotes;
}

function getUnstampedQuotes(arr) {
    const quotes = arr.filter(quote => quote.year === null);
    if (quotes.length === 0) return 404;
    return quotes;
}

function getQuoteByIndex(arr, id) {
    if (!arr[id - 1]) return 404;
    const quote = arr[id - 1];
    return quote;
}

function getAnyQuote(arr) {
    const quote = arr[Math.floor(Math.random() * arr.length)];
    return quote;
}
