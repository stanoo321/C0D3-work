const allFuns = {};

const copyLast = (a,b,result=[], i=0) => {
    if (i >= a.length) {
        return result
    }
    if (i >= b) {
        result.push(a[i])
    }
    return copyLast(a,b,result,i + 1)
}

allFuns.copyLast = copyLast

module.exports = allFuns