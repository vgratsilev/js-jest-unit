const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('validate 50', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('validate 0', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('validate 100', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('validate -1', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('validate 101', () => {
        expect(validateValue(101)).toBe(false);
    });
});
