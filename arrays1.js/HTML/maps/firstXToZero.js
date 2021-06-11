const allFuns = {}

const firstXToZero = (arr, x) => {
    return arr.map((e,i) => {
        if(i < x) {
            return 0
        }
        return e
    })
}

allFuns.firstXToZero = firstXToZero

module.exports = allFuns