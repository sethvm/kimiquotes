export function getAllQuotes(arr: any) {
    return arr;
}

// conditional functions return filtered quote arrays if matches are found
// will return the error code otherwise

export function getQuotesByYear(arr: any, year?: string) {
    let quotes = [];
    if (!year) quotes = arr.filter((quote: any) => !quote.year);
    else quotes = arr.filter((quote: any) => quote.year === parseInt(year));
    
    if (quotes.length === 0) return 404;
    return quotes;
}

export function getQuoteByIndex(arr: any, id: number) {
    if (!arr[id - 1]) return 404;
    const quote = arr[id - 1];
    return quote;
}

export function getAnyQuote(arr: any) {
    const quote = arr[Math.floor(Math.random() * arr.length)];
    return quote;
}
