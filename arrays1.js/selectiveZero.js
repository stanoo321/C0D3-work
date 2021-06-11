const allFuns = {};

const selectiveZero = (arr, val, i=0) => {
  if (i === arr.length) {
    return arr
  }
  if (arr[i] === val) {
    arr[i] = 0
  }
  return selectiveZero(arr, val, i + 1)
}

allFuns.selectiveZero = selectiveZero;

module.exports = allFuns;
