/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* Number: all kind of numerical characters, example: 1, 4, -5, 0
   String: set of characters always enclosed in quotes, example: "word", "56", "days"
   Boolean: value that can be defined by tru or false, example: isRaining: True; 
   Undefined: when a variable was create but there is no content inside
 */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Variable is like a box that you can keep some information. For that we use the word let and the equal symbol to atribute a value
example: let number = 5; My box is call number and it's kepping the value 5. */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let firstNumber = 12;
let secondNumber = 20;
let sum = firstNumber + secondNumber;
console.log(`The sum of 12 plus 20 is ${sum}.`);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log(x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log(name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction = 12 - x;
console.log(subtraction);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

if (name1 === name2) {
  console.log(`${name1} and ${name2} are the same`);
} else {
  console.log(`${name1} and ${name2} are not the same`);
}
/////////////

if (name1.toLocaleLowerCase === name2.toLocaleLowerCase) {
  console.log(`${name1} and ${name2} are the same`);
} else {
  console.log(`${name1} and ${name2} are not the same`);
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let y = 9;

if (y === 0) {
  console.log("Zero");
} else if (y === 1) {
  console.log("One");
} else if (y === 2) {
  console.log("Two");
} else if (y === 3) {
  console.log("Three");
} else if (y === 4) {
  console.log("Four");
} else if (y === 5) {
  console.log("Five");
} else if (y === 6) {
  console.log("Six");
} else if (y === 7) {
  console.log("Seven");
} else if (y === 8) {
  console.log("Eight");
} else if (y === 9) {
  console.log("Nine");
} else if (y === 10) {
  console.log("Ten");
} else {
  console.log("Write a number lower than 10!");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let rain = true;
let niceWeather = " ";
rain ? (niceWeather = "Yes") : (niceWeather = "No");
console.log(niceWeather);

/*The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by 
a question mark (?), then an expression to execute if the condition is truthy followed 
by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an 
alternative to an if...else statement.*/
