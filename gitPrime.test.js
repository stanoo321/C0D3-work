const fn = require('./gitPrime.js');

describe('primeMachine function', () => {
    it('should return next 2 primes starting with a negative number', () => {
        const getPrime1 = fn.primeMachine(-2)
        expect(getPrime1()).toEqual(2)
        expect(getPrime1()).toEqual(3)
    })
    it('should not return starting number if prime', () => {
        const getPrime2 = fn.primeMachine(5)
        expect(getPrime2()).toEqual(7)
        expect(getPrime2()).toEqual(11)
    })
    it('should return next 3 primes starting at 10', () => {
        const getPrime3 = fn.primeMachine(10)
        expect(getPrime3()).toEqual(11)
        expect(getPrime3()).toEqual(13)
        expect(getPrime3()).toEqual(17)
    })
})