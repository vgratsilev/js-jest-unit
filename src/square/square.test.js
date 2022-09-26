const square = require('./square');

describe('square', () => {
    let mockValue;

    beforeAll(() => {});

    beforeEach(() => {});

    test('Square 2', () => {
        expect(square(2)).toBe(4);
    });

    test('Square 25', () => {
        expect(square(25)).toBe(625);
    });

    test('Square 25 < 1000', () => {
        expect(square(25)).toBeLessThan(1000);
    });

    test('Square 25 > 500', () => {
        expect(square(25)).toBeGreaterThan(500);
    });

    test('Is not undefined', () => {
        expect(square(25)).not.toBeUndefined();
    });

    test('Called 1 time', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test('Called 0 times', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {});
});
