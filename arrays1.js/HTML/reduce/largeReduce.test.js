const fn = require('./largeReduce')

describe('largest function', () => {
    it('should find the largest number in the array', () => {
        const result = fn.largest([9,8,16,2,3])
        expect(result).toEqual(16)
    })
    it('should return 0 since given array is empty', () => {
        const result = fn.largest([0])
        expect(result).toEqual(0)
    })
    it('should return first index of array if all numbers are same', () => {
        const result = fn.largest([10,10,10,10])
        expect(result).toEqual(10)
    })
    it('should return an array of the bigger number', () => {
        const result = fn.largest([2,3,4,5,6,45,2])
        expect(result).toEqual(45)
    })
    it('should return an empty array', () => {
        const result = fn.largest([])
        expect(result).toEqual()
    })
})