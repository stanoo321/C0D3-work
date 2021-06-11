const allFuns = {};

const copyArray = (a, result=[]) => {
    if (result.length === a.length) {
        return result
    }
    result.push(a[result.length])
    return copyArray(a, result)
}

allFuns.copyArray = copyArray

module.exports = allFuns