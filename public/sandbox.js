"use strict";
//let greet = () => console.log('hello typescript');
var greet; // function use capitals
greet = function () { return console.log('hello typescript'); };
var add = function (a, b, c) {
    if (c === void 0) { c = 0; }
    return console.log("add two numbers " + a + " + " + b + ": ", a + b);
};
add(5, 6);
// optional parameter is initialized by question mark
// if you have default value you don't have to use the optional question mark
// const add = (a: number, b: number, c?: number | string) =>
var minus = function (a, b) { return a - b; };
// ts knows that the result will be number (hover over on the variable name)
// :void is completely different from undefined = when you don't return back anything
