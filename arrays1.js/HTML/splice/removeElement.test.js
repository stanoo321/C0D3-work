const fn = require('./removeElement')

describe('remove that damn function', () => {
    it('should not remove anything', () => {
        const data = ["Rocket", "Groot", "Star-Lord"]
        const result = fn.removeElement(data, 'Random')
        expect(result).toEqual(["Rocket", "Groot", "Star-Lord"])
    })
    it('should remove 1 element', () => {
        const data = ["Rocket", "Groot", "Star-Lord"]
        const result = fn.removeElement(data, 'Star-Lord')
        expect(result).toEqual(["Rocket", "Groot"])
    })
    it('should remove all elements', () => {
        const data = ["Rocket", "Rocket", "Rocket"]
        const result = fn.removeElement(data, 'Rocket')
        expect(result).toEqual([])
    })
    it('should remove 1 element', () => {
        const data = ["ok","it","ass"]
        const result = fn.removeElement(data,'ok')
        expect(result).toEqual(['it','ass'])
    })
    it('should return nothing', () => {
        const data = []
        const result = fn.removeElement(data,'it')
        expect(result).toEqual([])
    })
})