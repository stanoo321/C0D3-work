const allfuns = {}

Array.prototype.getevens = function() {
    return love.filter((e) => {
        return e % 2 === 0
    })
}


allfuns.getevens = getevens

module.exports = allfuns