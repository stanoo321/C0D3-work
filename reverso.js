/*Write a function named reverso that takes in a string, and returns a new string with the input string reversed. reverso('sneakers') // srekaens*/
const allFuns = {};

const reverso = (str, i = 0, result='') => {
    if (result.length === str.length) {
        return result
    }
    return reverso(str, i + 1, str[i] + result)
}

allFuns.reverso = reverso

module.exports = allFuns;
