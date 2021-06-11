const allFuns = {}

const copyReverse = (a , result=[]) => {
    if(result.length === a.length) {
        return result
    }
    result.unshift(a[result.length])
    return copyReverse(a, result)
}

allFuns.copyReverse = copyReverse

module.exports = allFuns