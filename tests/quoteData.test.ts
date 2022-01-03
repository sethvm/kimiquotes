// quote database
const quoteData = require('../src/quotes')

// function library import
const lib = require('./quoteDataTests')

// test cases
test('all quote objects have required properties', () => {
    expect(lib.quotePropertiesValid(quoteData)).toBe(true);
})

test('quote IDs are properly sequenced', () => {
    expect(lib.quoteIdsValid(quoteData)).toBe(true);
})
