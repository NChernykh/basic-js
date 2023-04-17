const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  arr = arr.map(item => Number(item));
  let max = Math.max(...arr.map((el, i) => {
    let newArr = arr.slice();
    newArr.splice(i, 1);
    return Number( newArr.join(''))
  }))

  return max;
}

module.exports = {
  deleteDigit
};