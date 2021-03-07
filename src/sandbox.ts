// type aliases
type StringOrNum = string | number; // type string or number
type ObjWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greeting = (user: ObjWithName) => {
  console.log(`${user.name} says typescript is fun!`);
};

logDetails('1234', 'Nike Pegasus 37 - neon');

const user = {
  name: 'John  Rambo',
  uid: 12334,
};

greeting(user);
