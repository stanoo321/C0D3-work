const allFuns = {}

const isPrime = (num, i=2) => {
    if(num === i) return true
    if(num < i) return false
    if(num % i === 0) return false
    return isPrime(num, i + 1)
}

const nonPrimeToZero = (arr) => {
    return arr.map((e) => {
        if(!isPrime(e)) {
            return 0
        }
        return e
    })
}

allFuns.nonPrimeToZero = nonPrimeToZero

module.exports = allFuns