const solution = () => {
    let counter = 0
    return () => {
        if(counter === 3) {
            return ''
        }
        counter = counter + 1
        return 'hello'
    }
}
