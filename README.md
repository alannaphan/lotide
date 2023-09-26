# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @yummyflan/lotide`

**Require it:**

`const _ = require('@yummyflan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: returns first element of array,
* tail: returns new array without element[0],
* middle: returns the number located in the middle of the array
* assertArraysEqual: asserts whether two arrays are equal or not
* assertEqual: asserts whether two parameters are equal or not
* assertObjectsEqual: asserts whether two objects are equal or not
* countLetters: counts the number of letters in given string
* countOnly: is given an array of strings and items to count, returns count of items
* eqArrays: function to determine whether two arrays are equal
* eqObjects: function to determine whether two objects are equal
* findKey: finds key based on given callback function
* findKeyByValue: finds key based on given value
* letterPositions: returns index positions of given letter
* map: calls a map method on each element of given array
* takeUntil: function that will take from given values until callback function stops it
* without: removes given item from array
