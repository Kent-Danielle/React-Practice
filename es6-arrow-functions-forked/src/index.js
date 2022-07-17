import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumber0 = numbers.map(function (x) {
  return x * 2;
});

numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
const newNumber1 = numbers.filter(function (num) {
  return num < 10;
});

numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber2 = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

numbers.reduce((accumulator, currentNumber) => accumulator * currentNumber);

////Find - find the first item that matches from an array.
const newNumber3 = numbers.find(function (num) {
  return num > 10;
});

numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
const newNumber4 = numbers.findIndex(function (num) {
  return num > 10;
});

numbers.findIndex((num) => num > 10);
