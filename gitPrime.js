/*Write a function named primeMachine that takes in a number and returns a function.*/

const allFuns = require("./preflight")


const isPrime = (num, start=2) => {
    if(num < start) {
          return false
      }
    if(num === start) {
          return true
      }
    if(num % start === 0) { 
          return false
      }
    return isPrime(num, start + 1)
  }
  
  const getNextPrime = (start) => {
    if(isPrime( start )) {
          return start
      }
    return getNextPrime(start + 1)
  }
  
  const primeMachine = (start) => {
    if (start < 2) {
      start = 1 // any number smaller than 2 is not a prime.
    }
    if (isPrime(start)) {
      start = start + 1
    }
    return () => {
          const result = getNextPrime(start)
      start = result + 1
      return result
    }
  }

  allFuns.primeMachine = primeMachine;

  module.exports = allFuns;