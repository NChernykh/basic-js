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
  let newStr = '';
  
  if (options.repeatTimes) {
    let separatorLength = 1;
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.addition && options.additionSeparator && options.separator ) {
        newStr += str + options.addition + options.additionSeparator + options.separator;
        separatorLength = options.separator.length + options.additionSeparator.length;
      }
      if (options.addition && !options.additionSeparator && options.separator ) {
        newStr += str + options.addition + options.separator;
        separatorLength = options.separator.length;
      }
      if (options.addition && !options.separator) {
        newStr += str + options.addition + '+';
      }
      if (!options.addition && options.separator) {
        newStr += str + options.separator;
        separatorLength = options.separator.length;
      }
      if (!options.addition && !options.separator) {
        newStr += str + '+';
      }
    }
    return newStr.slice(0, -separatorLength);
  } else {
    newStr = str + options.addition;
    return newStr
  }
}

module.exports = {
  repeater
};