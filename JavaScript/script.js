// console
console.log('Hello World');
console.log('This is an error');
console.log('This is a warning');

// let, const
const age = 30;

const score = 10;
console.log(score);

// Strings, Numbers, Boolean, null, undefined
const name = 'John';
const agetwo = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

// String
const s = 'Hello World';
const s1 = 'technology, computers, it, code';

console.log(s1.length);
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.substring(0, 5));
console.log(s1.substring(0, 5).toUpperCase());
console.log(s1.split(''));

// Arrays
const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ['Apple', 'Banana', 'Cherry'];

fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');

console.log(fruits);
console.log(fruits[0]);
