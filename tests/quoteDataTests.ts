module.exports = {
    quotePropertiesValid,
    quoteIdsValid
}

// returns true if all quote objects have the required properties (id, quote)
// returns index of object with missing properties on test fail
function quotePropertiesValid(arr: any) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].id || !arr[i].quote) {
            return i;
        }
    }
    return true;
}

// returns true if quote IDs are properly sequenced (ID = index + 1)
// returns index of object containing mismatch on test fail
function quoteIdsValid(arr: any) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id !== i + 1) {
            return i;
        }
    }
    return true;
}
