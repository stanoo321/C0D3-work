const allFuns = {}

const isPrime = (num, i = 2) => {
  if(num === i) return true
  if(num < i) return false
  if(num % i === 0) return false
  return isPrime(num, i + 1)
}

const primesOnly = (arr) => {
  return arr.filter((e) => {
    return isPrime(e)
  })
}



allFuns.primesOnly = primesOnly

module.exports = allFuns