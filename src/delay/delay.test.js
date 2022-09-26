const delay = require('./delay');

describe('delay', () => {
    test('Correct value', async () => {
        const sum = await delay(() => 5 + 6, 1000);
        expect(sum).toBe(11);
    });
});
