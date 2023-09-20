const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const letters = {};
  for (let letter of string) {
    if (letter === " ") {
      continue;
    }
    if (letters[letter]) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

const result = countLetters("lighthouse in the house");

assertEqual(result["e"], 3); // true
assertEqual(result["e"], 2); // false
assertEqual(result["k"], 2); // false
assertEqual(result[" "], 2); // false
assertEqual(result["h"], 4); // true


