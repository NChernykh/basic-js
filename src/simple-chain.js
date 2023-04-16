const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === undefined) {
      value = '';
    } else if (value === null) {
      value = 'null';
    }
    this.arr.push(value);
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) === false || position <1 || position > this.arr.length) {
      throw Error('You can\'t remove incorrect link!');
    }
    position -= 1;
    this.arr.splice(position, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const chainArr = this.arr;
    this.arr = [];
    return "( "+chainArr.join( " )~~( " ) +" )";
  }
};

module.exports = {
  chainMaker
};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
//  '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
