const allFuns = {}

const combineless5 = (a) => {
    return a.reduce((acc,e) => {
        if(e.length >= 5){
            return acc
        }
        return acc + e
    },"")
}

allFuns.combineless5 = combineless5

module.exports = allFuns