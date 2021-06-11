const allFuns = {};


const oddToZero = (arr) => {
    return arr.map((e) => {
        if(e % 2) {
            return 0
        }
        return e
    })
}

allFuns.oddToZero = oddToZero

module.exports = allFuns