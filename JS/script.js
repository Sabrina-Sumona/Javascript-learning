// for output in link
window.alert("My 'name' is Sumona");
alert('Welcome "to my website"');

// for output in page
document.write("My name is ");

// for output using inner html
document.getElementById("root").innerHTML = "I love JavaScript";
document.getElementById("H1").innerHTML = "This is header one";
document.getElementById("H2").innerHTML = "This is header two";

// for output in console
console.log("I am Minu");
// go to console to see the output: more option in browser>>more tools>>developers tools>>console or inspect the page to find console
//we can also run js code in the console but 1 line compile at a time
//clear() used to clear the console

//for input : promt("instruction")
prompt("enter your name: ");

//variable declaration & use
var nam;
nam = prompt("enter your name: ");
document.write(nam);
let age = prompt("enter your age: ");
console.log(age);
var a = 50;
let b = "Minu";
console.log(a);
console.log(b);


//exercise of temperature conversions
var C = prompt("Enter temperature in celcious:");
var F = 9 / 5 * C + 32;
alert("Fahrenheit: " + F + " Degree");
console.log("Task Complete");

//must declare the constant value and can't change further
const c = 2 * 10;
console.log(c);

//power operator
var d = 4 ** 2;
console.log(d);

//odd string operator
var s1 = "5" + "3";
console.log(s1);
var s2 = 5 + 3 + " sum";
console.log(s2);
var s3 = "concat " + 5 + 3;
console.log(s3);
var s4 = "5" - "3";
console.log(s4);

//type comparison operator
var s3 = "3";
var s4 = 3;
console.log(s3 === s4);

//conditional operator
var val = (1 < 5) ? "It's right" : "It's wrong";
console.log(val);

// number
x = 125e6;
// e6 means 10**6
console.log(x);
// infinity is also a no in js, we can initialize a var as infinity
var y = 23 / 0;
console.log(y);

//Hexa Decimal Numbers which stores as decimal
var x = 0xBB;
console.log(x);
// Returns value of x as a string with bases
console.log(x.toString());//It is a method
console.log(x.toString(2));
console.log(x.toString(8));
console.log(x.toString(10));
console.log(x.toString(16));

//takes values after point and also converts into string
var x = 3.1416;
console.log(x.toPrecision());//remain as it is //It is a method
console.log(x.toPrecision(2));//takes 1 value after point
console.log(x.toPrecision(4));//takes 3   "    "      "
console.log(x.toPrecision(6));//takes 5   "    "      "

//string to number
var x = "123";
console.log(parseInt(x));//It is a method
x = "123.4567";
console.log(parseInt(x));
console.log(parseFloat(x));

// float to int conversion
x = 56.87;
console.log(parseInt(x));

//is not a number method : true or false
x = "Sumona";
console.log(isNaN(x));
x = 9631;
console.log(isNaN(x));
x = "5678";
console.log(isNaN(x));
x = "5678xyz";
console.log(isNaN(x));

//Number tutorial Links:-
//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// ("...") or ('.....') or ("...'..'...") or ('..".."..') is allowed, ("...".."...") or ('..'..'..') is not allowed
// to use such string use \ before
var x = "\"Hello World\"";
console.log(x);
// use \ before to print \
var x = "\\Hello World";
console.log(x);
//tab
var x = "\tHello World";
console.log(x);
//new line
var x = "Hello\nWorld";
console.log(x);

//Length property of String
console.log(x.length);
console.log("Sabrina Naorin Sumona".length);

//Indexing  method
x = "Hello World";
console.log(x[0]);
console.log(x[10]);
console.log(x[15]);//more than length

// upper & lower cases  methods
x = "Sumona";
console.log(x.toUpperCase());
console.log(x.toLowerCase());
// return a new string, doesn't change x
console.log(x);

//trim method just remove both sides extra spaces, not the inside spaces
x = "   Sabrina Naorin Sumona    ";
console.log(x.trim());
// return a new string, doesn't change x (Immutable)
console.log(x);
//to store use another var
z = x.trim();
console.log(z);

// slice method return a new string, doesn't change x
x = "Sabrina_Naorin_Sumona";
console.log(x.slice());//remain as it is
console.log(x.slice(3, 7));//3 is starting index & ending is before 7
console.log(x.slice(-5, -2));//starting is before 5 from backward indexing & ending is 2 from backward indexing
console.log(x.slice(1));//1 is starting index & ending till main string end

//substring method
x = "Sabrina_Naorin_Sumona";
console.log(x.substr());//remain as it is
console.log(x.substr(3, 7));//3 is starting index & length is 7 of the substring
console.log(x.substr(-5, 4));//starting is before 5 from backward indexing & length is 4 of the substring
console.log(x.substr(1));//1 is starting index & ending till main string end

// replace method
x = "Sabrina_Naorin_Sumona";
console.log(x.replace("Sumona", "Minu"));// Sumona is replacesd by Minu
console.log(x.replace("S", "s"));// it replaces the 1st S only

// concat method
x = "Sabrina ";
console.log(x.concat(" Naorin", " Sumona"));//adds Naorin & Sumona after Sabrina

//String tutorial links:-
//https://www.w3schools.com/jsref/jsref_obj_string.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// boolean
x = 10 > 23;
console.log(x);
x = 10 > 2;
console.log(x);
y = true;// we can initialize as true or false
console.log(y);
x = "SABRINA";
console.log(Boolean(x));//Boolean method shows the var contains value by showing true
//Boolean method shows the var is undefined/null/NaN by showing false
var m;
console.log(Boolean(m));
m = null;
console.log(Boolean(m));
m = 3 / "asdf";
console.log(Boolean(m));

//Boolean tutorial links:-
//https://www.w3schools.com/jsref/jsref_obj_boolean.asp

// array is mutable
var nam = ["Sumona", "Sabrina", "Naorin", "Minu"];
console.log(nam);
console.log(nam[1]);
console.log(nam[3]);
console.log(nam.length);
nam[3] = "Tinu";
console.log(nam);
var nicknam = nam[0];
console.log(nicknam);
nam[4] = "Minu";//add 4th index
console.log(nam);
nam[nam.length] = "Tushi";//add last_index+1 as length = last_linex+1
console.log(nam);
//push add an item at last & pop delete the last item
console.log(nam.push("Rotti"));//returns total length after push
console.log(nam);
console.log(nam.pop());//returns the item which poped
console.log(nam);
nam.push("Rotti", "SNS", "Sumi");//push multiple items
console.log(nam);
//shift remove the 1st item & unshift insert an item at 1st
console.log(nam.shift());//returns total length after shift
console.log(nam);
console.log(nam.unshift("Sumona"));//returns total length after unshift
console.log(nam);
nam.unshift("Khuki", "Mona", "Sumu");//push multiple items
console.log(nam);
//split a string
s = "Sabrina, Naorin, Sumona";
console.log(s.split(","));//split based on coma
nam = s.split(", ");//split based on coma and space
console.log(nam);
console.log(nam.toString());//array of that string's all words as split based on space
var s = "My name is Sumona";
console.log(s.split());//array of that string
console.log(s.split(""));//array of that string's all characters
q = s.split(" ");//array of that string's all words
console.log(q);
//array elements joint together on the basis of space
var p = q.join(" ");//join is used to solve array elements are divide by coma
console.log(p);
var p = q.join("/");//array elements joint together on the basis of /
console.log(p);
var a = [1, 2, 3];
var b = [4, 5, 6, 1, 5, 90, 123, 34];
// array concatanation
console.log(a.concat(b));
// sort is a mutable method
console.log(b.sort());//sort in ascending order according the 1st element of a no., not sorted as value of the no.
console.log(b);
//reverse is a mutable method
console.log(b.reverse());//reverse the sorted array to make descending order
console.log(b);

//Array tutorial Links:-
//https://www.w3schools.com/jsref/jsref_obj_array.asp

//object holds properties name & then their value as a pair
var student = { name: "Sumona", age: 25, dept: "CSE" };
console.log(student);
console.log(student["name"]);//return name property's value
console.log(student.age);//return age property's value
//insert new property
student["university"] = "City";
console.log(student);
student.address = "Dhaka";
console.log(student);
//delete a property
console.log(delete student["university"]);//return true if deleted
console.log(student);
console.log(delete student.address);//return true if deleted
console.log(student);

// more about array & objects
var arr = [1, 2, 3, [4, 5, 6], 7, 8, 9];//nested array
console.log(arr);
console.log(arr[3][2]);//access element of inner array
arr = [1, 2, 3, [4, 5, 6, ["a", "b", "c"]], 7, 8, 9];
console.log(arr);
console.log(arr[3][3][1]);
var obj = { al: 1, bl: 3, cl: { xl: 5, yl: 10 } };//nested object
console.log(obj);
console.log(obj.cl.xl);
console.log(obj["cl"]["xl"]);
obj = { al: 1, bl: 3, cl: [1, 3, 4, { xl: 5, yl: 10 }] };//nested array & object
console.log(obj);
console.log(obj.cl[3].xl);
console.log(obj["cl"][3]["xl"]);
arr = [1, 3, { al: 1, bl: 3, cl: [1, 3, 4, { xl: 5, yl: 10 }] }];//nested array & object
console.log(arr);
console.log(arr[2].cl[3].xl);
console.log(arr[2]["cl"][3]["xl"]);
console.log(arr[2]["cl"][3].xl);

//undefined, empty value & NaN
var nm;
console.log(nm == undefined);//checks their value same or not
console.log(nm === undefined);//checks their type same or not
nm = null;
console.log(nm == undefined);
console.log(nm === undefined);//now it's null type 
var vm = "";//empty value
console.log(nm == vm);//nm's value is undefined & vm's value is empty
console.log(nm === vm);//nm's type is null & vm's type is empty
var mn = 34 / "asd5f";//nm is NaN
console.log(mn);
console.log(nm == mn);//nm's value is undefined & mn's value is NaN
console.log(nm === mn);//nm's type is null & mn's type is NaN
console.log(mn == vm);//mn's value is NaN & vm's value is empty
console.log(mn === vm);//mn's type is NaN & vm's type is empty

//preemptive type deals with value 
// number, string, boolen are preemptive data types
//preemptive type shares different addresses
let nw = 5;
console.log(nw);
let ol = nw;
console.log(ol);
nw = 7;
console.log(nw);
console.log(ol);
//reference type deals with index 
// array, object are reference types
let nnw = [4, 3, 9];
console.log(nnw);
oll = nnw;
console.log(oll);
nnw[2] = 97;
console.log(nnw);
console.log(oll);
//reference type shares same address

// Template literals (ES6)
// Backtick ``
let amg = `Hi there..
My name is Sumona.
        Welcome to my document.`
console.log(amg);
let name = "Rahim";
let age = "38";
let dob = "21 June, 1983";
// $(age) is for value of the variable age 
console.log(`His name is ${name}
His age is ${age}
Date of Birth ${dob}`);
a = 34
b = 67
console.log(`${a} + ${b} = ${a + b}`);

//if-else
age = prompt("Enter your age:");
if (age >= 50) {
    if (age <= 100) {
        console.log("Old..");
    } else {
        console.log("Rare..");
    }
} else if (age < 50 && age >= 18) {
    console.log("Young..");
} else {
    if (age < 0) {
        console.log("Not applicable..");
    } else {
        console.log("Kid..");
    }
}

// switch-case
var text;
a = prompt(`Select an option:
a. Apple
b. Ball
c. Cat`);
switch (a) {
    case "a":
        text = "Apple"; 1
        break;
    case "b":
        text = "Ball";
        break;
    case "c":
        text = "Cat";
        break;
    default:
        text = "Invalid";
}
console.log(text);

// exercise
var number = prompt("What is your number?");
number = parseInt(number);
var grade;

if (number <= 100 && number >= 80) {
    grade = "A+";
} else if (number < 80 && number >= 70) {
    grade = "A";
} else if (number < 70 && number >= 60) {
    grade = "A-";
} else if (number < 60 && number >= 50) {
    grade = "B";
} else if (number < 50 && number >= 40) {
    grade = "C";
} else if (number < 40 && number >= 33) {
    grade = "D";
} else if (number < 30 && number >= 0) {
    grade = "F";
} else {
    grade = "Invalid Input!";
}

console.log("Your Grade: " + grade);


console.log("Select an Option:\n1. Add\n2. Subtract\n3. Mulitply\n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
}

//loops
var pro = 1, j;
//for loop
for (j = 1; j <= 4; j++) {
    pro *= j;
}
console.log("Product = " + pro);
var i = 1;
var sum = 0;
var pro = 1;
//while loop
while (i <= 100) {
    sum += i;
    i++;
}
console.log("Sum = " + sum);
// break 
for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}
// continue
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}
//loop in string and array
let name = "Javascript";
let nlen = name.length;
let food = ["Cake", "Chocolate", "Ice Cream"];
let flen = food.length;
for (var i = 0; i < nlen; i++) {
    console.log(`${name[i]}: index ${i}`);
}
for (var i = 0; i < flen; i++) {
    console.log(`${food[i]}: index ${i}`);
}
// For-in string/array/object
// For-of string/array
//object doesn't have index
let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33,
}
// We will get index
for (var x in name) {
    console.log(`index ${x} and item ${name[x]}`);
}
// We will get values
for (var x of name) {
    console.log(x);
}
// We will get indexes
for (var y in food) {
    console.log(`Index: ${y}; and item: ${food[y]}`);
}
// We will get values
for (var y of food) {
    console.log(y);
}
// For-in with objects
for (var x in person) {
    console.log(`Property: ${x}
    Value: ${person[x]}`);
}
// For-of won't work for objects

// exercise
var n = parseInt(prompt("Enter the number of square no you want: "));
var sum = 0;
var series = "";
for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    if (i == n) { continue; }
    series += " + ";
}
console.log(`${series} = ${sum}`);

// Functions
// Built in Functions: alert(); console.log();
saySomething();//without parameter/argument
//User Defined Functions:
function saySomething() {
    console.log("Hello!");
    console.log("I am learning Javascript!");
    console.log("Bohubrihi");
}// Normal Declaration of a function
//Execution of Function by calling
saySomething();
// Function parameter/argument
function saySomenthing(fname) {
    console.log(`Hello ${fname}!`);
}
let val = "Naorin";
saySomenthing(val);//with parameter/argument
function addNum(a = 0, b = 0) {
    console.log(`Sum = ${a + b}!`);
}//with 2 parameters/arguments
addNum(4, 5);
addNum(3.6, 2.3);
// Function declaration as Expression 
let saySomething1 = function () {
    console.log('Hello World');
}//without parameter/argument
let saySomething2 = function (fname) {
    console.log(`Hello ${fname}!`);
}//with parameter/argument
saySomething1();
saySomething2(val);
// Arrow Function (ES6)
let saySomething3 = () => {
    console.log('Hello World');
}
let saySomething4 = (fname) => {
    console.log("I am " + fname);
}
saySomething3(val);
saySomething4(val);
// Array iteration using forEach
var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];
// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array
let printEverything = function (item, i, abc) {
    console.log(`Index : ${i} and Item ${item}`);
    console.log(abc);
}
foods.forEach(printEverything);
// Array iteration using Mapping
function addSomething(item) {
    return `${item} is a Food`;
}
let arr_res = foods.map(addSomething);
let arr_square = numbers.map(function (item) {
    return item * item;
})
console.log(arr_res);
console.log(arr_square);
// Method is basically a function which declared in the object 
let person = {
    firstname: "Sabrina",
    lastname: "Naorin",
    dob: "9-10-1995",
    fullname: function () { //Method
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(person.firstname);
console.log(person.fullname());
// Math Object
val = Math.PI;
console.log(val);
val = Math.E;//Euler's number
console.log(val);
val = Math.round(23.5);
console.log(val);
val = Math.ceil(3.2);
console.log(val);
val = Math.floor(3.9);
console.log(val);
val = Math.sqrt(81);
console.log(val);
val = Math.abs(-56);
console.log(val);
val = Math.pow(2, 8);
console.log(val);
val = Math.min(2, 3, 1, 0, -8);
console.log(val);
val = Math.max(-1, 2, 4, 5);
console.log(val);
val = Math.random();//return a random no less than 1
console.log(val);
val = Math.random() * 100;//return a random no from 1 to less than 100 
console.log(val);
val = Math.random() * 100 + 1;//return a random no from 1 to 100 
console.log(val);
val = Math.floor(Math.random() * 100 + 1);
console.log(val);
// Date Object of built in class Date
let today = new Date();//if date not assigned then it takes today's calender date
val = today;
console.log(val);
val = today.toString();
console.log(val);
let birthday = new Date('01-03-1995 10:00:00');
val = birthday;
console.log(val);
birthday = new Date('March 1 1996');
val = birthday;
console.log(val);
birthday = new Date('3/1/1997');
val = birthday;
console.log(val);
val = today.getMonth(); // Start from 0
console.log(val);
val = today.getDate();
console.log(val);
val = today.getDay();
console.log(val);
val = today.getFullYear();
console.log(val);
val = today.getHours();
console.log(val);
val = today.getMinutes();
console.log(val);
val = today.getSeconds();
console.log(val);
val = today.getMilliseconds();
console.log(val);
//time into time stamp
val = today.getTime();//time stamp is the number of milliseconds that have passed since January 1, 1970
console.log(val);
birthday.setMonth(9);
birthday.setDate(26);
birthday.setFullYear(1994);
birthday.setHours(10);
console.log(birthday);
//a val can be delared multiple times & can be reassigned multiple times using var
var a = 5;
console.log(a);
var a = 100;
console.log(a);
//a val can not be delared multiple times but can be reassigned multiple times using let
let n = 5;
console.log(a);
a = 100;
console.log(a);
//a val can not be delared multiple times and also can not be reassigned multiple times using const
const m = 5;
console.log(a);
// Global Scope, Functions Scope, If Scope & Loop Scope
var a = 1;
let b = 2;
const c = 3;
const d = 10;
console.log(`Global Scope: `, a, b, c);
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functions Scope: `, a, b, c, d);
}
test();
//Global Scope can be accessed from Functions Scope If Scope & Loop Scope but not vise versa
console.log(`Global Scope: `, a, b, c);
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope: `, a, b, c);
}
console.log(`Global Scope: `, a, b, c);
for (var a = 0; a < 10; a++) {
    console.log(`Loop Scope: `, a);
}
console.log(`Global Scope: `, a, b, c);
// Global Scope value can be changed by If Scope & Loop Scope when var is used but not in let or const

// Class(ES6) 
// Class is a template/blueprint for creating objects
//Class name starts with capital later
class Person {
    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }
    //methods
    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    fullname() {
        console.log(this.firstname + this.lastname);
    }
}
//object creation of the class
let person1 = new Person("Fazle", " Rahat", "11-13-1988");
let person2 = new Person("Moinul", " Islam", "02-11-1991");
let person3 = new Person("Rony", " Chy", "01-17-1996");
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());
person1.fullname();
person2.fullname();
person3.fullname();

// Sub Class & Inheritance
class Person { //Base Class or Super class
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    greeting() {
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}
class Customer extends Person { //Sub Class
    constructor(fname, lname, phone, memberid) {
        super(fname, lname);
        this.phone = phone;
        this.memberShip = memberid;
    }
    fullname() {
        console.log(this.firstname, this.lastname);
    }
}
let person1 = new Person("Fazle", "Rahat");
console.log(person1);
console.log(person1.greeting());
let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
console.log(customer1);
console.log(customer1.greeting());
customer1.fullname();

// Static Function
class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }
    static test() {
        console.log("I am staic!");
    }
}
let person1 = new Person("Simanta", "Paul");
//normal function is called from object
person1.greeting();
//static function can not be called from object
//it is called from class
Person.test();