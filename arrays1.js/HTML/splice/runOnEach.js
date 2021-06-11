const allFuns = require("./removeElement")

const allfuns = {}

const runOnEach = (a, fn, result=[], i=0) => {
    if (i === a.length) {
        return result
    }
    result.push(fn(a[i],i))
    return runOnEach(a,fn,result,i + 1)
}



allFuns.runOnEach = runOnEach

module.exports = allFuns