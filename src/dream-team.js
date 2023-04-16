const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  if (members === null || members===undefined || members === false) {
    return false
  }
  if (members.length) {
    members.forEach(name => {
      if (typeof name === 'string') {
        let trim = name.trim().toUpperCase();
        arr.push(trim[0]);
        console.log(arr)
      } else {
        return false;
      }
    })
    return arr.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};

console.log(createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]))
