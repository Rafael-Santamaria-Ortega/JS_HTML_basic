// There are 3 types of variables in JS: var, let and const
// var -> variable -> multiple ways of defining it: 
// let ( not global, if its going to be reassingned later), let var2='Chosen one?'
// var (normal global var, used but not preferred), var var1='Neo'
// const (if won't change and not global) const chosenOne=true
// Vars can store number, strings, boolean, arrays. etc. -> Also arithemtic operators, comparaison, conditionals, etc.
// use if/else like Python, but when more than one use switch/cases
// Has functions. Objects are basically Python dicts. Arrays are basically Python listStyleType
// Object
var choosePill={
	pillOne:'Red',
	pillTwo:'Blue',
	numberOfPills:2
};
var choice=choosePill.pillOne;
console.log(choice);
document.write(`<p>Neo's pill choice is ${choice}</p>`); // Document.write actually displays in browser and $ makes {} content effective
// Array
var mrRobot=['Elliot','Angela','Tyrell','Darlene'];
let character=mrRobot[2];
console.log(character);
document.write(`<p>The character from Mr. Robot series is: ${character}</p>`);
// JS has also for and while loops
// For 
for (a=1;a<=10;a++) {
	console.log(`Number: ${a}`); // basically f string but instead of f uses `x`
	document.write(`${a}`);
};
// While loops
let x=0;
document.write("<p>While loop output:</p>");
while (x<=3) {
	console.log(x++);
	document.write(`${x}`);
	x++;
};
// Do...while loop executes loop befor checking conditionals
let c=10;
document.write("<p>Do...While output:</p>");
do {
	console.log(c++);
	document.write(`${c}`);
	c++;
} while (c<=20);
// Document Object Model (DOM) manipulation -> Manipulate HTML file or webpage inside JS script -> Use events added to HTML tags
// Cross-Site Scriptig (XSS) -> security vulnerability in web apps, which can be exploited to execute malicious scripts in target
// Multiple types of XSS: Keylogging, Stealing cookies, Phishing, etc. 
// Most common XSS: DOM-based XSS (Type-0 XSS) -> payload executed by manipulating DOM in target browser
// Reflected XSS (non-persistent XSS) -> Maliciousscript from another website bounces to target app or website -> Passed as queries in URL
// Stored XSS (Persistent XSS) -> Malicious cript injected directly into the website or application.
const array=[1,10,5,15,2,7,28,900,45,18,27];
console.log(array);
document.write("<p>Unsorted array:</p>");
document.write(array.join(",")+"<br>");
array.sort(function (a,b) {return a-b});
console.log(array);
document.write("<p>Sorted array:</p>");
document.write(array.join(",")+"<br>");