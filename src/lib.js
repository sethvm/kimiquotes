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
    if (!arr[index]) return `No quote found at index ${index} :(`;
    const quote = arr[index];
    return quote;
}

function getAllQuotes(arr) {
    return arr;
}

function getQuotesByYear(arr, year) {
    const filteredQuotes = arr.filter(quote => quote.year === parseInt(year));
    if (filteredQuotes.length === 0) return `No quotes found from the year ${year} :(`;
    return filteredQuotes;
}
