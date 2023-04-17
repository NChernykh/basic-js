const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    String(str);
  }
  if (typeof options.addition !== 'string') {
    String(options.addition)
  }

  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";

  const repeat = (separator, addition = '', repeatTimes = 1) => {
    let newArr = [];
    for (let i = 0; i < repeatTimes; i++) {
      newArr.push(String(addition));
    }
    return newArr.join(separator);
  }

  const addition = repeat(options.additionSeparator, options.addition, options.additionRepeatTimes);
  const fullSeparator = addition + options.separator;
  return repeat(fullSeparator, str, options.repeatTimes) + addition;
}

module.exports = {
  repeater
};

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))