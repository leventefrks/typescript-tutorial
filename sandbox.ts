let names = ['john', 'mary', 'luigi'];

names.push('julia');

let numbers = [1, 2, 5, 7, 2];

numbers.push(11);

// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30,
// };

// ninja.age = 66;

// explicit types
let character: string;
// let age: number;
let isLoggedIn: boolean;

// age = 66;
isLoggedIn = true;

// arrays
let ninjas: string[] = []; // initialize an empty array

ninjas.push('rambo', 'mickey mouse', 'donkey kong');

// ninjas.push(66);

// union types

let mixed: (string | number | boolean)[] = []; // item can be string or number (several different types)

mixed.push('jason', 66);

let uid: string | number;

uid = '1212';
uid = 454545;

// but it cannot be boolean

// uid = false;

// objects

let ninja: object;

ninja = {
  name: 'net ninja',
  age: 66,
  description: 'old pal',
};

ninja = []; // it allowed

// first you gotta declare the type then the actual values

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

// any type - dynamic types (value can be changed in the future)

let age: any = 25;

age = true;

age = {
  name: 'luigi',
};

let mixture: any[] = [];

console.log('mixture', mixture);

console.log(age);
