const allFuns = {}

const isPrime = (num, i = 2) => {
    if(num === i) return true
    if(num < i) return false
    if(num % i === 0) return false
    return isPrime(num, i + 1)
  }
  
  const firstPrime = (arr) => {
    return arr.find((e) => {
      return isPrime(e)
    })
  }
  

allFuns.firstPrime = firstPrime

module.exports = allFuns