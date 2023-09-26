const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let value of keys1) {
      let val1 = object1[value];
      let val2 = object2[value];
      if (Array.isArray(val1) && Array.isArray(val2)) {
        if (eqArrays(val1, val2)) {
          return true;
        }
      } else if (val1 === val2) {
        return true;
      }
    }
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ A: ${inspect(actual)} === B : ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ A: ${inspect(actual)} !== B : ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
assertObjectsEqual(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);

module.exports = assertObjectsEqual;