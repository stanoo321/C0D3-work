const allFuns = {};

const firstXToZero = (arr, firstX, i=0) => {
 if (i === arr.length || i >= firstX) {
    return arr
 }
 arr[i] = 0;
 return firstXToZero(arr, firstX ,i + 1)
}
allFuns.firstXToZero = firstXToZero;

module.exports = allFuns;
