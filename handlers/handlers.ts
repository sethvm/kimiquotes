// quote data interface
import { QuoteObject } from "../data/quotes";

// GET handlers return filtered quote arrays if matches are found
// will return the error code otherwise

/* /quotes */
export function getAllQuotes(arr: QuoteObject[]) {
    return arr;
}

/* /quotes/{ :year || unstamped } */
export function getQuotesByYear(arr: QuoteObject[], year?: string) {
    let quotes = [];
    if (!year) quotes = arr.filter((quote: QuoteObject) => !quote.year);
    else quotes = arr.filter((quote: QuoteObject) => quote.year === parseInt(year));
    
    if (quotes.length === 0) return 404;
    return quotes;
}

/* /quote/:index */
export function getQuoteByIndex(arr: QuoteObject[], id: number) {
    if (!arr[id - 1]) return 404;
    const quote = arr[id - 1];
    return quote;
}

/* /quote */
export function getAnyQuote(arr: QuoteObject[]) {
    const quote = arr[Math.floor(Math.random() * arr.length)];
    return quote;
}
