"use strict";
var greet;
// example 1
var gree;
greet = function (name, greeting) {
    console.log(name + " says typescript is awesome & sending his " + greeting + "!");
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    return action === 'add' ? numOne + numTwo : numOne - numTwo;
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " who is " + ninja.age + " thinks typescript is funky!");
};
