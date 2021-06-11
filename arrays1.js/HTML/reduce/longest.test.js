const fn = require('./longest')

describe('longest function', () => {
    it('should find the longest string at the end of the array', () => {
        const result = fn.longest(["Thor", "Loki", "Rocket", "Ant-Man"])
        expect(result).toEqual("Ant-Man")
    })
    it('should find the longest string in the middle of the array', () => {
        const result = fn.longest(["Thor", "Spiderman", "Ant-Man"])
        expect(result).toEqual("Spiderman")
    })
    it('should return string from array of length 1', () => {
        const result = fn.longest(["Wasp"])
        expect(result).toEqual("Wasp")
    })
    it('should return a string whatever the arryay is in', () => {
        const result = fn.longest(["uydtudfgjdfdf","dhdfkjdfhdsfhksdfhkdsfkjhsdf","dh"])
        expect(result).toEqual("dhdfkjdfhdsfhksdfhkdsfkjhsdf")
    })
    it('Should return a string in the beginning at the array', () => {
        const result = fn.longest(["Hello", "JK", "Fuc"])
        expect(result).toEqual("Hello")
    })
    it('Should return a string in the second of the array', () => {
        const result = fn.longest(["jh","butt",'h'])
        expect(result).toEqual('butt')
    })
})