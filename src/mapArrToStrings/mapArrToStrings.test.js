const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Correct values', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });

    test('Incorrect values', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined])).toEqual(['1', '2', '3']);
    });

    test('Empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    });

    test('Negation', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
    });
});
