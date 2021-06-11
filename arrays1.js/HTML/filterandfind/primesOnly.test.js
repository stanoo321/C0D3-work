const fn = require('./primesOnly')

describe('primesOnly function', () => {
    it('should return empty array if no primes', () => {
        const result = fn.primesOnly([-13, 0, 1, 4, 6])
        expect(result).toEqual([])
    })
    it('should return an identical array if all are prime', () => {
        const result = fn.primesOnly([2, 17, 1601, 7919])
        expect(result).toEqual([2, 17, 1601, 7919])
    })
    it('should return an identical array if all are prime', () => {
        const result = fn.primesOnly([2, 7])
        expect (result).toEqual([2,7])
    })
})