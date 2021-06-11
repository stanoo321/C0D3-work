const allFuns = {}

const onlyIndex = (a,b,result=[],i=0) => {
    if (i >= a.length) {
        return result
    }
    if (b >= a[0].length) {
        return result
    }
    result.push(a[i][b])
    return onlyIndex(a,b,result,i+1)
}

allFuns.onlyIndex = onlyIndex

module.exports = allFuns