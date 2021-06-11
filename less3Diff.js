const allfuns = {};

const reverso = (str, i = 0, result = "") => {
  if (result.length === str.length) {
    return result;
  }
  return reverso(str, i + 1, str[i] + result);
};
allfuns.reverso = reverso;
module.exports = allfuns;
