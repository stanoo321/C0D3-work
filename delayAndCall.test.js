const fn = require('./delayAndCall')

// Don't worry about understanding all the functions used to test
//   this function. But they use natural language, so you might
//   be able to figure them out!
describe('delayAndCall function', () => {
    jest.useFakeTimers()
    it('should run function after 1000 milliseconds', () => {
        const callback = jest.fn()
        const fun = fn.delayAndCall(1000, callback)
        fun()
        expect(callback).not.toBeCalled() // It shouldn't run right away
        jest.advanceTimersByTime(1000)
        expect(callback).toBeCalled() // But after 1000ms 
                                      // it should have run
    })
    it('should run callback repeatedly', () => {
        const callback = jest.fn()
        const fun = fn.delayAndCall(1000, callback)
        fun()
        expect(callback).not.toBeCalled() // It shouldn't run right away
        jest.runAllTimers()
        expect(callback).toHaveBeenCalledTimes(1) // Should have been 
                                                  // called once
        fun()
        jest.runAllTimers()
        expect(callback).toHaveBeenCalledTimes(2) // Now it should have 
                                                  // been called twice
    })
})