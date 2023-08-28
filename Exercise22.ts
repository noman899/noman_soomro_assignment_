// define some variables for testing
let str1: string = 'hello';
let str2: string = 'world';
let num1: number = 5;
let num2: number = 10;
let arr: string[] = ['apple', 'banana', 'cherry'];

// tests for equality and inequality with strings
console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == 'hello');

console.log("Is str1 == 'world'? I predict False.");
console.log(str1 == 'world');

console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);

// tests using the lower case function
console.log("Is str1.toLowerCase() == 'HELLO'.toLowerCase()? I predict True.");
console.log(str1.toLowerCase() == 'HELLO'.toLowerCase());

console.log("Is str2.toLowerCase() == 'WORLD'.toLowerCase()? I predict True.");
console.log(str2.toLowerCase() == 'WORLD'.toLowerCase());

// numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is num1 == 5? I predict True.");
console.log(num1 == 5);

console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2);

console.log("Is num2 >= 10? I predict True.");
console.log(num2 >= 10);

console.log("Is num1 < 3? I predict False.");
console.log(num1 < 3);

// tests using "and" and "or" operators
console.log("Is num1 > 3 && num2 < 15? I predict True.");
console.log(num1 > 3 && num2 < 15);

console.log("Is num1 < 3 || num2 > 15? I predict False.");
console.log(num1 < 3 || num2 > 15);

// test whether an item is in an array
console.log("Is 'banana' in arr? I predict True.");
console.log(arr.includes('banana'));

// test whether an item is not in an array
console.log("Is 'orange' not in arr? I predict True.");
console.log(!arr.includes('orange'));
