const fn = require('./getevens')

describe('getEvens function', () => {
    it('should pull even numbers from various positions', () => {
        const result = [9, 80, 11, 2].getEvens()
        expect(result).toEqual([80, 2])
    })
    it('should pull even numbers from concurrent positions', () => {
        const result = [2, 4, 6, 7, 8].getEvens()
        expect(result).toEqual([2, 4, 6, 8])
    })
    it('should have no result if no evens', () => {
        const result = [1, 3, 9, 21].getEvens()
        expect(result).toEqual([])
    })
    it('should pull evens numbers from the arrays', () => {
        const result = [1,2,3,4,5,6,7,8].getEvens()
        expect(result).toEqual([2,4,6,8])
    })
    it('should not have evens in the array', () => {
        const result = [1,3,5,7,9].getEvens()
        expect(result).toEqual([])
    })
})