const fn = require('./oddToZero')

describe('oddToZero function', () => {
    it('should zero when some elements are odd', () => {
        const result = fn.oddToZero([1, 2, 3, 4, 5])
        expect(result).toEqual([0, 2, 0, 4, 0])
    })
    it('should zero when all elements are odd', () => {
        const result = fn.oddToZero([1, 3])
        expect(result).toEqual([0, 0])
    })
    it('should return same array when no elements are odd', () => {
        const result = fn.oddToZero([8, 10, 12])
        expect(result).toEqual([8, 10, 12])
    })
    it('should return same array when no elements are odd', () => {
        const result = fn.oddToZero([2,4,6,8,10])
        expect(result).toEqual([2,4,6,8,10])
    })
})
