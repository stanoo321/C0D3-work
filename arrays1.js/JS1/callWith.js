const callWith = (num) => {
    return (f) => {
        return f(num)
    }
}