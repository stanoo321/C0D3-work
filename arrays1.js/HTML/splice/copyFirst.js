const allFuns = {}

// Copies an array but leaves out a given number of elements at the end//

const copyFirst = (a,b,result=[],i=0) => {
    if (i >= a.length - b) {
        return result
    }
    result.push(a[i])
    return copyFirst(a,b,result, i + 1)
}

allFuns.copyFirst = copyFirst

module.exports = allFuns