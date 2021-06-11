const fn = require('./sum')

describe('sum function', () => {
    it('should return 0 for an empty array', () => {
        const result = fn.sum([])
        expect(result).toEqual(0)
    })
    it('should return negative for array of negative numbers', () => {
        const result = fn.sum([-2, -3])
        expect(result).toEqual(-5)
    })
    it('should add up array with negative and postive numbers', () => {
        const result = fn.sum([-20, -3, 20])
        expect(result).toEqual(-3)
    })
    it('it should add up all numbers in the array', () => {
        const result = fn.sum([1,2,3,4])
        expect(result).toEqual(10)
    })
    it('it should add all the numbers in the array', () => {
        const result = fn.sum([2,3,1])
        expect(result).toEqual(6)
    })
})