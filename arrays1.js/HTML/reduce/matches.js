const allFuns = {}


const matches = (arr, val) => {
    return arr.reduce((acc,e) => {
        if(e === val) {
            return acc + 1
        }
        return acc 
    },0)
}

allFuns.matches = matches

module.exports = allFuns