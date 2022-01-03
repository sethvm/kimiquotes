"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnyQuote = exports.getQuoteByIndex = exports.getQuotesByYear = exports.getAllQuotes = void 0;
function getAllQuotes(arr) {
    return arr;
}
exports.getAllQuotes = getAllQuotes;
// conditional functions return filtered quote arrays if matches are found
// will return the error code otherwise
function getQuotesByYear(arr, year) {
    let quotes = [];
    if (!year)
        quotes = arr.filter((quote) => !quote.year);
    else
        quotes = arr.filter((quote) => quote.year === parseInt(year));
    if (quotes.length === 0)
        return 404;
    return quotes;
}
exports.getQuotesByYear = getQuotesByYear;
function getQuoteByIndex(arr, id) {
    if (!arr[id - 1])
        return 404;
    const quote = arr[id - 1];
    return quote;
}
exports.getQuoteByIndex = getQuoteByIndex;
function getAnyQuote(arr) {
    const quote = arr[Math.floor(Math.random() * arr.length)];
    return quote;
}
exports.getAnyQuote = getAnyQuote;
