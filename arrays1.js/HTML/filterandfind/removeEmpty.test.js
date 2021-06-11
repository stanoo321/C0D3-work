const fn = require('./removeEmpty')

describe('removes empty strings', () => {
    it('should return [] when array is empty', () => {
        const result = fn.removeEmpty([])
        expect(result).toEqual([])
    })
    it('should return [] when array only has empty strings', () => {
        const result = fn.removeEmpty(["","",""])
        expect(result).toEqual([])
    })
    it('should return same array when array has no empty strings', () => {
        const result = fn.removeEmpty(["hello","world"])
        expect(result).toEqual(["hello","world"])
    })
    it('should return array without empty strings', () => {
        const result = fn.removeEmpty(["hello", "world", "", "name", "", "is"])
        expect(result).toEqual(["hello","world", "name", "is"])
    })
    it('should remove array empty strings', () => {
        const result = fn.removeEmpty(["ok","","Where","","ScrewYouBitch"])
        expect(result).toEqual(["ok","Where","ScrewYouBitch"])

    })
})