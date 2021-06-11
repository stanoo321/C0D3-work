const fn = require('./increasing')

describe('increasing function', () => {
    it('should return true for an increasing array', () => {
        const result = fn.increasing([2, 7, 9, 10])
        expect(result).toEqual(true)
    })
    it('should return false for an array that decreases', () => {
        const result = fn.increasing([19, 13, 17, 11])
        expect(result).toEqual(false)
    })
    it('should return false if elements are repeated', () => {
        const result = fn.increasing([2, 7, 7, 10])
        expect(result).toEqual(false)
    })
    it('should return true for an array of one number', () => {
        const result = fn.increasing([51])
        expect(result).toEqual(true)
    })
    it('should return true for an array of one number', () => {
        const result = fn.increasing([100,200,300,400,500,600,])
        expect(result).toEqual(true)
    })
    it('should return false if the elements are decreases', () => {
        const result = fn.increasing([9,8,6,3,2,1])
        expect(result).toEqual(false)
    })
    it('should return true if the element increasing', () => {
        const result = fn.increasing([12,34,56,78,90,123,235,678,908,123456])
        expect(result).toEqual(true)
    })
    it('should return true when it empty array', () => {
        const result = fn.increasing([])
        expect(result).toEqual(true)
    })
})