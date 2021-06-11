const fn = require('./append')

describe('append', () => {
    it('should append a string to 5 strings', () => {
        const result = fn.append(["hello", "my", "name", "is", "pikachu"], ' -log')
        expect(result).toEqual(["hello -log", "my -log", "name -log", "is -log", "pikachu -log"])
    })
    it('should append a string to 2 strings', () => {
        const result = fn.append(["<img/>", "<p></p>"], "<hr/>")
        expect(result).toEqual(["<img/><hr/>", "<p></p><hr/>"])
    })
    it('should not modify the original array', () => {
        const arr = ["Spiderman", "Peter Parker"]
        fn.append(arr, "Mary Jane")
        expect(arr).toEqual(["Spiderman", "Peter Parker"])
    })
    it('should append a string to 3 strings.' , () => {
        const result = fn.append(["hellos", "mys", "names", "iss", "pikachus"], ' -logs')
        expect(result).toEqual(["hellos -logs", "mys -logs", "names -logs", "iss -logs", "pikachus -logs"])
    })
})