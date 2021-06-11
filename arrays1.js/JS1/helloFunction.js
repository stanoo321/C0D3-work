const solution = () => {
    let result = ''
    return () => {
        result = result + 'Hello'
        return result
    }
}