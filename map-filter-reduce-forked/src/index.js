import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

var new_num = numbers.map(double);
// console.log(new_num);

//Filter - Create a new array by keeping the items that return true.

var filter_num = numbers.filter(function (num) {
  return num > 10;
});
// console.log(filter_num);

//Reduce - Accumulate a value by doing something to each item in an array.

var reduce_num = numbers.reduce(function (accumulator, currentNumber) {
  // console.log("A:" + accumulator);
  // console.log("C:" + currentNumber);
  return accumulator + currentNumber;
});

// console.log(reduce_num);

//Find - find the first item that matches from an array.

var find_num = numbers.find(function (num) {
  return num > 10;
});

//console.log(find_num);

//FindIndex - find the index of the first item that matches.

var findIndex_num = numbers.findIndex(function (num) {
  return num > 10;
});

//console.log(findIndex_num);

var truncatedMeanings = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(truncatedMeanings);
