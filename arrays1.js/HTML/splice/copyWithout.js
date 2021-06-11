const allFuns = {};

const copyWithout = (a, val, i=0, result=[]) => {
    if (i === a.length){
    return result
    }
    if (a[i] !== val) {
        result.push(a[i])
    }
    return copyWithout(a, val, i + 1, result)
}

allFuns.copyWithout = copyWithout

module.exports = allFuns