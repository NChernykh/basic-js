const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else if (!isNaN(Date.parse(date))) {
    if (date.toString() == Date.prototype.toString.call(new Date())) {
      throw Error('Invalid date!')
    }
    let month = date.getMonth();
    if (month >= 2 && month < 5) {
      return 'spring';
    } else if (month >=5 && month <=7) {
      return 'summer';
    } else if (month > 7 && month < 11) {
      return 'autumn (fall)';
    } else {
      return 'winter';
    }
  } else {
    throw Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};

console.log(getSeason(new Date(1456, 0, 2, 1, 50, 9, 238)))