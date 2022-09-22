// quote database
const quoteData = require('../data/quotes');

// test cases
describe('All quote objects', () => {
    test('have id and quote properties', () => {
        expect(quotePropertiesValid(quoteData)).toBe(true);
    });

    test('are properly sequenced by id', () => {
        expect(quoteIdsValid(quoteData)).toBe(true);
    });
});

// returns true if all quote objects have the required properties (id, quote)
// returns index of object with missing properties otherwise
function quotePropertiesValid(arr: any) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].id || !arr[i].quote) {
            return i;
        }
    }
    return true;
}

// returns true if quote IDs are properly sequenced (ID = index + 1)
// returns index of object containing mismatch otherwise
function quoteIdsValid(arr: any) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id !== i + 1) {
            return i;
        }
    }
    return true;
}
