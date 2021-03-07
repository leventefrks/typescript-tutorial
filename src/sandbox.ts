//let greet = () => console.log('hello typescript');

let greet: Function; // function use capitals

greet = () => console.log('hello typescript');

const add = (a: number, b: number, c: number | string = 0) =>
  console.log(`add two numbers ${a} + ${b}: `, a + b);

add(5, 6);

// optional parameter is initialized by question mark
// if you have default value you don't have to use the optional question mark
// const add = (a: number, b: number, c?: number | string) =>

const minus = (a: number, b: number) => a - b;
// ts knows that the result will be number (hover over on the variable name)

// :void is completely different from undefined = when you don't return back anything
