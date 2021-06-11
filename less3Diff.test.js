const fn = require('./less3Diff.js')

describe('reverso function', () => {
    it('should reverse "sneakers"', () => {
        const result = fn.reverso('sneakers')
        expect(result).toEqual('srekaens')
    })
    it('should reverse strings of one letter', () => {
        const result = fn.reverso('s')
        expect(result).toEqual('s')
    })
    it('should return an empty string when given an empty string', () => {
        const result = fn.reverso("")
        expect(result).toEqual("")
    })
    it('should reverse hello bro', () => {
        const result = fn.reverso('hello')
        expect(result).toEqual('olleh')
    })
})