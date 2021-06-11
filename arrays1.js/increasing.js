/*Write a function named increasing that determines whether the elements of an array are ordered such that they represent a strictly ascending sequence of numbers. This means that the value of each element (other than the first) is greater than the value of the previous element.*/
const allFuns = {};

const increasing = (arr, i=0) => {
  if(i >= arr.length) {
    return true
  }
  if(arr[i] <= arr[i - 1]) {
    return false
  }
  return increasing(arr, i + 1)
}

allFuns.increasing = increasing;

module.exports = allFuns;
