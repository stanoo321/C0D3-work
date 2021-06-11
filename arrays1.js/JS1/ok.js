Array.prototype.getEvens = function() {
    return this.filter((e) => {
        return e % 2 == 0
    })
}

