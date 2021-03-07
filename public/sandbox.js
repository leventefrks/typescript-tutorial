"use strict";
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greeting = function (user) {
    console.log(user.name + " says typescript is fun!");
};
logDetails('1234', 'Nike Pegasus 37 - neon');
var user = {
    name: 'John  Rambo',
    uid: 12334,
};
greeting(user);
