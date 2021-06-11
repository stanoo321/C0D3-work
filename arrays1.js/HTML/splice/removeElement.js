const allFuns = {};

/*Takes array a and a string as parameters. This function removes any element of the array a when the element value matches the value of the string.*/
const removeElement = (a, val, i=0) => {
    if (i === a.length) {
        return a
    }
    if (a[i] === val) {
        a.splice(i ,1)
        return removeElement(a, val, i)
    }
    return removeElement(a ,val, i + 1)

}

allFuns.removeElement = removeElement

module.exports = allFuns