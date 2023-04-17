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
    if (Number.isInteger(position) === false || position < 1 || position > this.arr.length) {
      this.arr = [];
      throw Error(`You can't remove incorrect link!`);
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
    console.log(this.arr)
    let string = `( ${chainArr.join( " )~~( " )} )`;
    return string;
  }
};

module.exports = {
  chainMaker
};

console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(2).finishChain())
