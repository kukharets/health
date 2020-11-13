import randomIntegerBetween from "utils/randomIntegerBetween";


describe('randomIntegerBetween tests', () => {
    it('randomIntegerBetween return number in correct range, repeat 10 times', () => {
        let times = 10;
        for (let i = 0; i < times; i++) {
            expect(randomIntegerBetween(1, 6)).toBeGreaterThan(0);
            expect(randomIntegerBetween(1, 6)).toBeLessThan(7);
        }
    });
});
