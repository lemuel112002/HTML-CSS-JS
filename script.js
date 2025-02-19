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
const a = null;
const b = undefined;
let c;

console.log(typeof name);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

// String
const d = 'Hello World';
const e = 'technology, computers, it, code';

console.log(d.length);
console.log(d.toUpperCase());
console.log(d.toLowerCase());
console.log(d.substring(0, 5));
console.log(d.substring(0, 5).toUpperCase());
console.log(d.split(''));

// Arrays
const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ['apple', 'banana', 'cherry'];

fruits[3] = 'grapes';

fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('banana'));

console.log(fruits);

// Object Literals
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'CA',
    }
}

const { firstname, lastname, address: {street, city, state} } = person;
person.email = 'john@gmail.com';

console.log(person);

// Arrays of Objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },

    {
        id: 3,
        text: 'Doctor Appt',
        isCompleted: false,
    }
];

/* 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */
console.log(todos[2].text)

// For
for (let f = 1; f < 11; f++) {
    console.log('This is loop: ' + f);
}

for (let f = 1; f <= 11; f++) {
    console.log('This is ' + `For Loop Number: ${f}`);
}

for (let f = 0; f < todos.length; f++) {
    console.log(todos[f].text);
}

for (let todo of todos) {
    console.log(todo.id);
}

// While
let g = 1;
while (g < 11) {
    console.log('This is while loop: ' + g);
    g++;
}

// foreach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function (todo) { 
    return todo.text;
})

console.log(todoCompleted)

// Conditions
const h = 5;

if (h > 5) {
    console.log('h is greater than 5 or i is greater than 10');
} else if (h < 10) {
    console.log('h is greater than 10');
} else {
    console.log('h is less than 5');
}

// Ternary Operator
const i = 9;

const color = i > 10 ? 'red' : 'blue';
const colorOther = 'green';

// Switch
switch (colorOther) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither red nor blue');
        break;
}

// Functions
function addNo (num1, num2) {
    console.log(num1 + num2);
}
addNo(4, 4);

function addNoTwo (num1 = 1, num2 = 1) {
    return (num1 + num2);
}
console.log(addNoTwo(6, 3));

const addNum = (num1 = 1, num2 = 1) => {
    return (num1 + num2);
}
console.log(addNum(5, 5));

const addNumTwo = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNumTwo(5, 5));

const addNumThree = num1 => num1 + 5;
console.log(addNumThree(5));

// Object-Oriented Programming (OOP)
// Constructor function
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function () { 
        return this.dob.getFullYear();
    }
    this.getFullName = function () {  
        return `${this.firstname} ${this.lastname}`;
    }
}

Person.prototype.getBirthYear = function () {  
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {  
    return `${this.firstname} ${this.lastname}`;
}

// Class
class PersonClass {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '1990-01-01');
const person2 = new Person('Mary', 'Smith', '1995-02-08');

console.log(person1);
console.log(person2.getFullName());
