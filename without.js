const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  } console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

const without = function(source, itemsToRemove){
  const newArr = Array.from(source);
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++){
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      }   
    }
  } return newArr;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(words);
