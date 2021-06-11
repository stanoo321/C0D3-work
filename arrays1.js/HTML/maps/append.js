const allFuns = {}

const append = (arr, val) => {
    return arr.map((e) => {
        return e + val
    })
}

allFuns.append = append

module.exports = allFuns