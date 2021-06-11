/*Write a function named delayAndCall that takes in 2 parameters, a number and a function, and returns a function */

const allfuns = {};

const delayAndCall = (time, fn) => {
  return () => {
    setTimeout(fn, time);
  };
};

allfuns.delayAndCall = delayAndCall;

module.exports = allfuns;
