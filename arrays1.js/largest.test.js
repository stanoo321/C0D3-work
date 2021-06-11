const fn = require('./largest')

describe('largest function', () => {
    it('should find the largest of 3 numbers', () => {
        const result = fn.largest([5, 3, 9])
        expect(result).toEqual(9)
    })
    it('should find the largest of 4 negative numbers', () => {
        const result = fn.largest([-20, -2, -5, -10])
        expect(result).toEqual(-2)
    })
    it('should return undefined on an empty array', () => {
        expect(fn.largest([])).toEqual(undefined)
    })
    it('should find the largest of 5 numbers', () => {
        const result = fn.largest([5,7,1,8,3])
        expect(result).toEqual(8)
    })
    it('should find the largest of 6 numbers', () => {
        const result = fn.largest([100,200,300,400,5000,700])
        expect(result).toEqual(5000)
    })
    it('should find the largest of 5 negative numbers', () => {
        const result = fn.largest([-20390239023,-38472398472398473248972389,-1,-9823479384739472394723947239472394723947293847239847982347982347293,-5])
        expect(result).toEqual(-1)
    })
    it('should return the largest of seven numbers', () => {
        const result = fn.largest([4544,23,237823,1232,65,2342,3243234])
        expect(result).toEqual(3243234)
    })
})