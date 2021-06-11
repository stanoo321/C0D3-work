/*Write a function named largest that returns the largest number in an array.*/
const allFuns = {};

const largest = (arr, i=0, currentLargest=arr[0]) => {
  if (i === arr.length) {
    return currentLargest
  }
  if (arr[i] > currentLargest) {
    currentLargest = arr[i]
  }
  return largest(arr, i + 1, currentLargest)
}

allFuns.largest = largest;

module.exports = allFuns;
