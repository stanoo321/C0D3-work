const allFuns = {}


const firstLetters = (arr) => {
    return arr.map((e) => {
        return e[0]
    })
}
allFuns.firstLetters = firstLetters

module.exports = allFuns