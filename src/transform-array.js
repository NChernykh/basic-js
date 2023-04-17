const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-prev', 4, 5]) => [1, 2, 3, 3, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const doubleNext = () => {
    let newArr = arr.slice();
    let index = newArr.findIndex(item => item === '--double-next');
    let item = newArr[index + 1];
    index === newArr.length - 1 ? newArr.splice(index, 1) : newArr.splice(index, 1, item);
    return newArr;
  }

  const doublePrev = () => {
    let newArr = arr.slice();
    let index = newArr.findIndex(item => item === '--double-prev');
    let item = newArr[index - 1];
    index === 0 ? newArr.splice(index, 1) : newArr.splice(index, 1, item);
    return newArr;
  }

  const discardPrev = () => {
    let newArr = arr.slice();
    let index = newArr.findIndex(item => item === '--discard-prev');
    console.log(index);
    index === 0 ? newArr.splice(index, 1) : newArr.splice(index - 1, 2);
    return newArr;
  }

  const discardNext = () => {
    let newArr = arr.slice();
    let index = newArr.findIndex(item => item === '--discard-next');
    index === newArr.length - 1 ? newArr.splice(index, 1) : newArr.splice(index, 2);
    return newArr;
  }

  const doubleDiscarded = () => {
    let newArr = arr.slice();
    let index = newArr.findIndex(item => item === '--discard-next');
    index === newArr.length - 1 ? newArr.splice(index, 1) : newArr.splice(index, 2);

    let index2 = arr.findIndex(item => typeof item === 'string');
    newArr.splice(index2, 1);
    return newArr;
  }

  const doubleDoubled = () => {
    let newArr = arr.slice();
    let index = newArr.findIndex(item => item === '--double-next');
    let item = newArr[index + 1];
    index === newArr.length - 1 ? newArr.splice(index, 1) : newArr.splice(index, 1, item, item);
    let index2 = newArr.findIndex(item => typeof item === 'string');
    newArr.splice(index2, 1);
    return newArr;
  }

  const discardDoubled = () => {
    let newArr = arr.slice();
    let res = newArr.filter(item => typeof item === 'number')
    return res;
  }

  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`)
  } else if (arr.length === 0) {
    return [];
  } else if (!arr.includes('--double-next') && !arr.includes('--double-prev') && !arr.includes('--discard-next') && !arr.includes('--discard-prev')) {
    return arr;
  } else {
    if (arr.indexOf('--discard-next') + 2 === arr.indexOf('--double-prev')) {
      return doubleDiscarded();
    }
    if (arr.indexOf('--discard-next') + 2 === arr.indexOf('--discard-prev')) {
      return doubleDiscarded();
    }
    if (arr.indexOf('--double-next') + 2 === arr.indexOf('--double-prev')) {
      return doubleDoubled();
    }
    if (arr.indexOf('--double-next') + 2 === arr.indexOf('--discard-prev')) {
      return discardDoubled();
    }
    if (arr.includes('--double-next')) {
      return doubleNext();
    }
    if (arr.includes('--discard-prev')) {
      return discardPrev();
    }
    if (arr.includes('--double-prev')) {
      return doublePrev();
    }
    if (arr.includes('--discard-next')) {
      return discardNext();
    }
  }
}

module.exports = {
  transform
};

console.log(transform(['--double-prev', 1, true, true]))