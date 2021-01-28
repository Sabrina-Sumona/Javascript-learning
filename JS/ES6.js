// Global Scope

var a = 1;
let b = 2;
const c = 3;


console.log(`Global Scope: `, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functions Scope: `, a, b, c);
}

test();

console.log(`Global Scope: `, a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope: `, a, b, c);
}

console.log(`Global Scope: `, a, b, c);


for (let a = 0; a < 10; a++) {
    console.log(`Loop: `, a);
}


console.log(`Global Scope: `, a, b, c);

// Normal Function Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function (name2) {
    console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3, dob) => {
    console.log(name3, dob);
}
let saySomething3 = (name) => {
    console.log("I am " + name);
}
// one parameter can be used without ()
let square = val => { return val * val; };
// one non-return statement can be used without {}
let saySomething0 = name0 => console.log("I am " + name0);
// we can return without using return keyword
let square0 = val0 => val0 * val0;

console.log(square(3));
saySomething0("Sumona");
console.log(square0(4));
saySomething("Bohubrihi");
saySomething1("Simanta");
saySomething2("JavaScript", "01/03/1997");
saySomething3("Sabrina");

// callback function

numbers = [1, 2, 3, 4, 5];
//normal function
numbers.forEach(function (item) {
    console.log(item);
});
//arrow function
let printAll = (item) => {
    console.log(item);
}
numbers.forEach(printAll);
//we can write it in just one line
numbers.forEach(item => console.log(item));
//map
let squareNum = numbers.map(item => item * item);
console.log(squareNum);
//both are the same
function squareAll(item) {
    return item * item;
}
let squareNums = numbers.map(squareAll);
console.log(squareNums);

// Template literals (ES6)
// Backtick ``

let name = "Rahim";
let age = "38";
let dob = "21 June, 1983";

console.log(`His name is ${name}
His age is ${age}
Date of Birth ${dob}`);

let x = 34
let y = 67
console.log(`${x} + ${y} = ${x + y}`);

// Array destructing

let fruits = ["Apple", "Grape", "Orange"];

//normal way
// let f1 = fruits[0], f2 = fruits[1], f3 = fruits[2];
// console.log(f1);
// console.log(f2);
// console.log(f3);

//destruction
// let [f1,f2,f3] = fruits;

// console.log(f1);
// console.log(f2);
// console.log(f3);
// console.log(f1,f2,f3);

// let [f1,f2,f3,f4] = fruits;
// console.log(f1,f2,f3,f4);

let [f1, , f3] = fruits;
console.log(f1, f3);


// Swap Variables
//for swaping must inizialize after declaration, not together 

a = 8;
b = 20;

//normal way
// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log(`a = ${a} and b = ${b}`);

// Object Destructing

let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    bd: '09-27-1995'
}

//normal way
// let fname = p.firstName, lname = p.lastName, dobi = p.bd;
// console.log(fname, lname, dobi);

//destruction
//must give the same name of the class
// let { firstName, lastName, bd } = person;
// console.log(firstName, lastName, bd);
// rename
let { firstName: fname, lastName: lname, bd: dobi } = person;
console.log(fname, lname, dobi);

//using normal function
// function display(p) {
//     let fname = p.firstName, lname = p.lastName, dobi = p.bd;
//     console.log(fname, lname, dobi);
// }
// display(person);

//using destruction function
// function display({ firstName, lastName, bd }) {
//     console.log(firstName, lastName, bd);
// }
// display(person);

//rename in destruction function
function display({ firstName: fname, lastName: lname, bd: dobi }) {
    console.log(fname, lname, dobi);
}
display(person);

// Spread Operator ...

let str = "Bohubrihi";
let newStr = [...str];//work like split 

console.log(newStr);

//combining arrays
let fruit1 = ["Apple", "Pine-apple", "Mango"];
let fruit2 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

//can't using normal way
let newArr = [fruit1, newFruit, fruit2];
console.log(newArr);

//using spread operator
let newArr2 = [...fruit1, newFruit, ...fruit2];
console.log(newArr2);

// Spread on Object (ES8)

let details = {
    fname: "Simanta",
    lname: "Paul"
}

// let newPerson = {...details}
// console.log(newPerson);

// adding extra property
let newPerson = { ...details, dob: "08-26-1995" }
console.log(newPerson);

// Spread Operator with function Parameters

let num = [23, 1, 0, -1];

//finding max
console.log(Math.max(...num));

//passing parameters
person = ["Simanta", "Paul"]
test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}
test(...person);

// Rest Operator ...

fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits;

console.log(first);
console.log(second);
console.log(third);

let student = {
    finame: "Simanta",
    laname: "Paul",
    dobo: "8-26-1995"
}

// let {finame, laname, dobo} = student

// console.log(finame);
// console.log(laname);
// console.log(dobo);

let { finame, ...others } = student;

console.log(finame);
console.log(others);

// test =(name, num1, ...numbers) => { // Rest
//     console.log(name);
//     console.log(num1);
//     console.log(numbers);
// }
// test("Simanta", 67,23,3);

let moreNum = [78, 1, 2, 5, 6];
test = (name, ...numbers) => { // Rest
    console.log(name);
    console.log(numbers);
}
test("Simanta", ...moreNum); // Spread

// Before ES6 Classes

//ES5 Constructor function
// An alternative to Class
function People(nam, ag) {
    this.Name = nam;
    this.Age = ag;
}
let p1 = new People("Sumona", 23);
console.log(p1);
// method
// declared outside
People.prototype.getNam = function () {
    console.log(this.Name);
}
p1.getNam();

// ES6 class
class Pupil {
    constructor(nam, ag) {
        this.Name = nam;
        this.Age = ag;
    }
    // method
    // declared inside
    getNam() {
        console.log(this.Name);
    }
}
let p2 = new Pupil("Sumona", 23);
console.log(p2);
p2.getNam();

// Promises
// An alternative to Callback

// let applyDiscount = new Promise((resolve, reject) => {
//     let discount = false;
//     if (discount) {
//         resolve('Discount Applied');
//     } else {
//         reject('Discount Failed!');
//     }
// });

// applyDiscount
//     .then(result => {
//         console.log(result);
//     })
//     .catch(result => {
//         console.log(result);
//     })

// console.log(applyDiscount);

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Symbols
a = Symbol();
// b = Symbol();
// console.log(a,b);
// console.log(a == b);
// console.log(a === b);

person = {
    name: "Simanta",
    age: 25,
    //symbol adding
    [a]: "Hello World!"
}
console.log(person);

//but symbol is not a property of object
console.log(Object.getOwnPropertyNames(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));
for (x in person) {
    console.log(x);
}

//to get property of symbol
console.log(Object.getOwnPropertySymbols(person));

// to pass parameters in a symbol
let sym1 = Symbol("Hello");
let sym2 = Symbol("Hello");
//symbols are always differents
console.log(sym1 == sym2);
console.log(sym1);

// Iterator
//use like loop

let iterable = "Hello";
// Symbol.iterator
console.log(iterable[Symbol.iterator]);//returns a function
let iter = iterable[Symbol.iterator]();//to get the object
console.log(iter);
//to iteratev the string
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//we can't pause a loop
//but we can pause a iteration as we want
console.log("other codes");

//to get the values
console.log(iter.next().value);
console.log(iter.next().value);

//when finished
console.log(iter.next());

iterable = [1, 2, 3, 4, 5, 5];

// Symbol.iterator
console.log(iterable[Symbol.iterator]);//returns a function
iter = iterable[Symbol.iterator]();//to get the object
console.log(iter);
//to iterate array
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//to get the values
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

//when finished
console.log(iter.next());

// Custom Iterator

let names = ["Sabrina", "Naorin", "Sumona", "Minu", "SNS"];

function customIterator(arr) {
    let i = 0;
    //return a object
    return {
        //next is a function
        next: function () {
            //using conditional operator
            return i < arr.length ? { value: arr[i++], done: false } : { value: undefined, done: true };
        }
    };
}

let members = customIterator(names);

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);

console.log("Random codes...");

console.log(members.next());
console.log(members.next());
console.log(members.next());

// Generators

function* genFunction() {
    console.log("I am some code");
    yield 1;
    //after return everything will be ignored
    // return;
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    //some code will be shown before which value is iterated
    yield "Rahim";
    yield 4;
    yield "Karim";
    yield "Hello World";
}

iter = genFunction();

console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next());
console.log(iter.next());

// Promises
//async
// Successful -> resolve
// Failed -> reject
// Example : Image File

let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 3;
        if (a == 4) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 4000);
})

// .then 
// .catch

prom.then((message) => {
    console.log("I am from then " + message);
}).catch((message) => {
    console.log("I am from catch " + message);
})

console.log("I am after Promise");

// console.log(fetch('https://api.chucknorris.io/jokes/random'));

// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => console.log(response));

// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => console.log(response.json()));

//promise chaining
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => console.log(data));

console.log("hello");

//normal function

// function getJokes() {
//     return "All the jokes";
// }
// console.log(getJokes());

//convert a funtion into promise 

// async function getJokes() {
//     return "All the jokes";
// }
// console.log(getJokes());
// getJokes()
// .then(res=>{
//     console.log(res);
// })

// async await

// async function getJokes() {
//     let response = await fetch('https://api.chucknorris.io/jokes/random');
//     return response;
// }

// console.log(getJokes());

//chaining

async function getJokes() {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let data = await response.json();
    return data;
}

// console.log(getJokes());

getJokes().then(jokes => console.log(jokes));

// Set
//no duplicate data
// Set has key & value
//key & value are the same in set

let newSet = new Set();
console.log(newSet);

let mySet = new Set([1, 2, 2, 4, 4]);
console.log(mySet);

// Delete
mySet.delete(4);
console.log(mySet);

// Clear
mySet.clear();
console.log(mySet);

// Add
mySet.add("Hello");
console.log(mySet);
mySet.add(5);
console.log(mySet);
mySet.add(2);
console.log(mySet);
mySet.add(4);
console.log(mySet);
mySet.add(9);
console.log(mySet);

// Check
console.log(mySet.has(4));
console.log(mySet.has(1));

// Size
console.log(mySet.size);

// Iterating Sets

for (x of mySet.values()) {
    console.log(x);
}

// entries

// iter = mySet.entries();
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next());

// for (x of mySet.entries()) {
//     console.log(x);
// }

// for (x of mySet.keys()) {
//     console.log(x);
// }

//same as mySet.values
// for (let [x] of mySet.entries()) {
//     console.log(x);
// }

//spread
iter = [...mySet.values()];
console.log(iter);

iter = [...mySet.keys()];
console.log(iter);

//forEach loop
mySet.forEach(value => console.log(value));

// Maps
// Map has key & value
// key & value can be different in map

let myMap = new Map();
console.log(myMap);

myMap = new Map(
    [
        //['key name', value]
        ['first key', 10],
        ['second key', 'Bohubrihi']
    ]
);
console.log(myMap);

// Add
myMap.set('third key', 'Hello Wolrd!');
console.log(myMap);

// call value by using key
console.log(myMap.get('second key'));

// Check by key
console.log(myMap.has('first key'));
console.log(myMap.has('key'));

//size
console.log(myMap.size);

// Iterate
//key & value
for (let x of myMap) {
    console.log(x);
}
//key & value pairs
for (let [x,y] of myMap) {
    console.log(x, y);
}
//key
for (let x of myMap.keys()) {
    console.log(x);
}
//value
for (let x of myMap.values()) {
    console.log(x);
}
// entries
//same as key & value iterate
for (let x of myMap.entries()) {
    console.log(x);
}
//for each
//get value then key
myMap.forEach((x, y) => {
    console.log(x,y);
})
//map to array conversion
let arr = Array.from(myMap);
console.log(arr);
//key of map into array
arr = Array.from(myMap.keys());
console.log(arr);
//value of map into array
arr = Array.from(myMap.values());
console.log(arr);