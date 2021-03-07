var names = ['john', 'mary', 'luigi'];
names.push('julia');
var numbers = [1, 2, 5, 7, 2];
numbers.push(11);
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30,
// };
// ninja.age = 66;
// explicit types
var character;
// let age: number;
var isLoggedIn;
// age = 66;
isLoggedIn = true;
// arrays
var ninjas = []; // initialize an empty array
ninjas.push('rambo', 'mickey mouse', 'donkey kong');
// ninjas.push(66);
// union types
var mixed = []; // item can be string or number (several different types)
mixed.push('jason', 66);
var uid;
uid = '1212';
uid = 454545;
// but it cannot be boolean
// uid = false;
// objects
var ninja;
ninja = {
    name: 'net ninja',
    age: 66,
    description: 'old pal'
};
ninja = []; // it allowed
// first you gotta declare the type then the actual values
var ninjaTwo;
// any type - dynamic types (value can be changed in the future)
var age = 25;
age = true;
age = {
    name: 'luigi'
};
var mixture = [];
console.log('mixture', mixture);
console.log(age);
