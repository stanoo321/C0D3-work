const fn = require('./firstLetters')

describe('firstLetters function', () => {
    it('should grab the first letters from 5 strings', () => {
        const result = fn.firstLetters(["hello", "my", "name", "is", "pikachu"])
        expect(result).toEqual(["h", "m", "n", "i", "p"])
    })
    it('should grab the first letters from 3 strings', () => {
        const result = fn.firstLetters(["JavaScript", "is", "awesome"])
        expect(result).toEqual(["J", "i", "a"])
    })
    it('should return an empty array when given an empty array', () => {
        const result = fn.firstLetters([])
        expect(result).toEqual([])
    })
    it('should return an array when given an e array', () => {
        const result = fn.firstLetters(["HI","Where"])
        expect(result).toEqual(['H',"W"])
    })
    it('Should return the first 3 Letters from array', () => {
        const result = fn.firstLetters(["WHere","Are","you"])
        expect(result).toEqual(["W","A","y"])
    })
})