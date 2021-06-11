const fn = require('./onlyIndex')

describe('onlyIndex function', () => {
    const someNumbers = [
        [1,2,3,4,5],
        [6,9,8,7,6],
        [4,5,6,6,7],
        [0,1,2,3,4]
    ]
    it('should not modify the original array', () => {
        const original = [...someNumbers]
        fn.onlyIndex(someNumbers, 2)
        expect(someNumbers).toEqual(original)
    })
    it('should pull out the element at index 2', () => {
        const result = fn.onlyIndex(someNumbers, 2)
        expect(result).toEqual([3, 8, 6, 2])
    })
    it('should pull out the element at index 0', () => {
        const result = fn.onlyIndex(someNumbers, 0)
        expect(result).toEqual([1, 6, 4, 0])
    })
    it('should pull out the element at index 4', () => {
        const result = fn.onlyIndex(someNumbers, 4)
        expect(result).toEqual([5, 6, 7, 4])
    })
    it('should pull out the element at index 1', () => {
        const result = fn.onlyIndex(someNumbers, 1)
        expect(result).toEqual([2, 9, 5, 1])
    })
    it('should pull out the element at index 1', () => {
        const result = fn.onlyIndex(someNumbers, 0)
        expect(result).toEqual([1, 6, 4, 0])
    })
})