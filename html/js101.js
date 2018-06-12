//printing stuff...
//console.log("Hello, World");
//document.write("Hello, World");
//alert("Hello, World");

//VARIABLES
// Same as is in every other language. A var is a place to stash something (a number, string, an array, object, boolean, ect).
// That you could write yourself everytime, but a var is faster
// Data-types available:
// 1. string
// 2. number
// 2a. float, double
// 2b. int
//console.log(.2+.1);
// 3. Boolean - true, false
// 4. Array
// 5. Object
// 6. Symbol

// JS variables are made dynamically like Python, Ruby, Php. That means you dont have to declare the type. It's the interptors problem
// 3 ways to declare a variable in JS.
//(1) var x
//(2) let will make the variable a block level variable
// for(var i = 0; i < 10; i++){
// 	console.log(i)
// }
// console.log("value of i after the loop ", i)

// for(let i = 0; i < 10; i++){
// 	console.log(i);
// }
// console.log("value of i after the loop ", i)

//(3) const y = 3;
// y = 4;
//Null, undefined, false, and 0 all come back false. Everything else comes back true

// JavaScript uses camelCase
let name = "Robert Bunch";
name = 'Robert Bunch';
name = "Robert \"A CRAZY GUY \"Bunch";
let age;
let firstName = "Dario";
let lastName = "Seays";
let fullName = firstName + " " + lastName;
console.log(fullName);
const awesomeGuy = `${firstName} ${lastName}`;
console.log(awesomeGuy);

const theMeaningOfLife = `The meaning of life is ${40+2}`;
console.log(theMeaningOfLife);

// NUMBERS
// no FLOAT, no DOUBLE....just number
const theYear = 2018;
const shortPi = 3.14;
console.log(typeof(shortPi));

// Math is just like everyone else
const twoYearsAgo = theYear - 2;
console.log(twoYearsAgo);
// +, -, \, *, %

const whatThe = fullName + 3;
console.log(whatThe);
console.log(typeof(whatThe));

// Booleans
// 1 or 0, off or on, true or false, yes or no
const theTruth = true;
const theLie = false;
console.log(typeof(theTruth));

// Incramenting...
let num = 1;
// postfixing
num++;
console.log(num);
num--;
console.log(num);
//prefixing
++num;
console.log(num);
console.log(++num);

// Order of operations for math ... same as what you learned in third grade
// * and / and % ALWAYS come before + and - except for () overrides all

// conditionals
const classSize = 32;
if(classSize > 20){
	console.log("Wow, that's a big class!")
}
if(classSize >= 32){
	console.log("Wow, you are at capacity!")
}

const a = 3;
const b = `3`;
// == will compare the value WITHOUT respect to datatype
if(a == b){
	console.log("Equal");
}
// === will compare value AND datatype'
if(a === b){
	console.log("Equal"); //false
}
// To check if NOT true...
if(a !== b){
	console.log("A and B are not Equal");
}

// The math object
let n = 12.2;
let roundedN = Math.round(n);
console.log(roundedN);
let cielN = Math.ceil(n);
console.log(cielN);
let floorN = Math.floor(n);
console.log(floorN);

let rand = Math.random();
console.log(rand);
let betweenOneAndTen = Math.ceil(rand*10);
console.log(betweenOneAndTen);

// Arrays
// init an empty array
let students = [];
// set a var to an array with elements in it
students = [`Shane`, `Calder`, `Amber`];
// array.push will add a new element onto the end of the array
students.push(`Donell`);
console.log(students);
// All arrays have a length property. It is always accessible
console.log(students.length);
// Just like Java and everyone else, the 1st index is 0
//Strings are just fancy arrays
const finallyAGirl = `Tawni`;
students.push(`Tawni`);
console.log(finallyAGirl.length);
console.log(students.length);

// Any type of datatype in any index in an array
// 1. String
// 2. array
// 3. object
// 4. Booleans
// 5. number

const chaoticArray = [
	`Mariano`,
	436,
	[
		`orange juice`,
		`JayZ`,
		3
	]
];

console.log(chaoticArray);
console.log(chaoticArray[2][0]);

chaoticArray.pop();
console.log(chaoticArray);

// .shift() = will remove and RETURN the first element in the array
console.log(chaoticArray.shift());
console.log(chaoticArray);

let nfcSouthTeams = [
	`Falcons`,
	`Panthers`,
	`Saints`,
	`Bucs`
];
// slice copy from the array ... takes 2 args:
// 1. index to start at
// 2. index to stop at
// SLICE DOES NOT MUTATE THE Array
const l = nfcSouthTeams.slice(1, 3);
console.log(l);

// Filter out even numbers
// A bad way to do this
const randomNumbers = [1, 5, 6, 613, 65, 248934, 30945, 18, 268];
let evenNumbers = [];
for(let i = 0; i < randomNumbers.length; i++){
	if(randomNumbers[i] % 2 == 0){
		evenNumbers.push(randomNumbers[i]);
	}
}
console.log(evenNumbers);

// Better way to do it
// All arrays have a map method. Map will loop throught the array and return
// each time through a new element for the new array
const evenNumberArray = randomNumbers.filter(function(number){
	if(number % 2 == 0){
		return number;
	}
})
console.log(evenNumberArray);

// Splice is a prototype of all arrays.... if you are an array... you have Splice
// splice will allow you to add and remove from any index
// splice takes 3 args:
// 1. Where to start (just like slice)
// 2. How many to delete (can be 0)
// 3. What to insert, if anything (can be left out)
randomNumbers.splice(1, 4, "Huh");
console.log(randomNumbers);

const sql = 'SELECT * FROM user WHERE name = "' + name + '"'
const sql2 = `SELECT * FROM user WHERE name = "${name}"`
