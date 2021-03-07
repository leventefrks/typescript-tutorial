let greet: Function;

// example 1
let gree: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says typescript is awesome & sending his ${greeting}!`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) =>
  action === 'add' ? numOne + numTwo : numOne - numTwo;

// example 3
let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} who is ${ninja.age} thinks typescript is funky!`);
};
