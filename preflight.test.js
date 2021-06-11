const fn = require('./preflight.js')

describe('removeCharX function', () => {
    it('should remove the first character', () => {
        const str = "We're in the endgame now."
        const result = fn.removeCharX(str, 0)
        expect(result).toEqual("e're in the endgame now.")
    })
    it('return the original string', () => {
        const str = "a"
        const result = fn.removeCharX(str, 3)
        expect(result).toEqual("a")
    })
    it('return the original string', () => {
        const str = "abc"
        const result = fn.removeCharX(str, -3)
        expect(result).toEqual("abc")
    })
    it('return the original string', () => {
        const str = "123"
        const result = fn.removeCharX(str, -6)
        expect(result).toEqual("123")
    })
    it('return the original string', () => {
        const str = "k"
        const result = fn.removeCharX(str, 6)
        expect(result).toEqual("k")
    })
    it('should remove the fifth character', () => {
        const str = "OOOMMMYYYGGGOOODDD"
        const result = fn.removeCharX(str, 5)
        expect(result).toEqual("OOOMMYYYGGGOOODDD")
    })
})


