const fn = require('./noMoreEvens')

describe('noMoreEvens function', () => {
    it('should remove evens from an array with a mix of numbers', () => {
        const result = fn.noMoreEvens([1, 2, 6, 4, 5])
        expect(result).toEqual([1,5])
    })
    it('should remove all numbers when even', () => {
        const result = fn.noMoreEvens([2, 16, 40, 52])
        expect(result).toEqual([])
    })
    it('should not touch an array of all odd numbers', () => {
        const result = fn.noMoreEvens([1, 571, 3, 9])
        expect(result).toEqual([1, 571, 3, 9])
    })
    it('should remove negative even numbers as well', () => {
        const result = fn.noMoreEvens([-2, -571, -4])
        expect(result).toEqual([-571])
    })
    it('should remove all even numbers', () => {
        const result = fn.noMoreEvens([2,4,6,12,20,5])
        expect(result).toEqual([5])
    })
    it('should be an empty array when its all evens', () => {
        const result = fn.noMoreEvens([2,4,6,8,10])
        expect(result).toEqual([])
    })
    it('it should remove some evens numbers', () => {
        const result = fn.noMoreEvens([1,2,3,4,5,6,7,8,9,10])
        expect (result).toEqual([1,3,5,7,9])
    })
})