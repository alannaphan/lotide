const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 5, 8, 13];
const food = ["flan", "pasta", "pizza", "nuggets"];
const square = [2, 3, 4, 5, 6];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const num = map(numbers, number => number + 1);
console.log(num);

const nom = map(food, dish => dish + " is the best!");
console.log(nom);

const squared = map(square, sqd => Math.pow(sqd, 2));
console.log(squared);

assertArraysEqual((results1), ['g', 'c', 't', 'm', 't']);
assertArraysEqual((num), [2, 3, 4, 6, 9, 14]);
assertArraysEqual((nom), [
  'flan is the best!',
  'pasta is the best!',
  'pizza is the best!',
  'nuggets is the best!'
]);
assertArraysEqual((squared), [4, 9, 16, 25, 36]);
