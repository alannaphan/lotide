const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr) {
  let mid = [];
  if (arr.length < 3) {
    return mid;
  }
  if (arr.length % 2 !== 0) {
    let index = Math.floor(arr.length / 2);
    mid.push(arr[index]);
    return mid;
  } else {
    let index1 = arr.length / 2 - 1;
    let index2 = arr.length / 2;
    mid.push(arr[index1], arr[index2]);
    return mid;
  }
};

module.exports = middle;