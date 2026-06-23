// ✅ When to Use Which Loop?
// Loop Type	        When to Use
// for	                Fixed number of iterations, index-based array access
// while	            Condition-based, unknown number of iterations
// do...while	        Must execute at least once before checking condition
// for...of	            Iterate over values of an iterable (arrays, strings, sets, maps)
// for...in	            Iterate over object keys (properties)
// forEach/map	        Cleaner functional style for arrays, when you don’t need break or continue
// ***************************************************************************************
// ***************************************************************************************

// 1. for Loop
// 👉 Best when you know how many times you want to run the loop (fixed iterations).

// Syntax:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Use case examples:
// Iterating a fixed number of times
// Accessing array elements by index
// Generating sequences (like Fibonacci)

let numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: ${numbers[i]}`);
}
// ***************************************************************************************
// ***************************************************************************************

// 2. while Loop
// 👉 Best when you don’t know how many times to loop, but you know the condition.

Syntax: while (condition) {
  // code runs while condition is true
}

// Use case examples:
// Waiting for a condition to become true
// Repeatedly checking user input until valid
// Simulating processes

// Example:

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

// ***************************************************************************************
// ***************************************************************************************
// 3. do...while Loop
// 👉 Similar to while, but executes at least once before checking the condition.
// Syntax:

do {
  // code
} while (condition);

// Use case examples:
// Taking input at least once (like password prompt)
// Menus where the user chooses to continue or not

// Example:

let count = 0;
do {
  console.log("Executed at least once");
  count++;
} while (count < 3);
// ***************************************************************************************
// ***************************************************************************************
// 4. for...of Loop (ES6+)
// 👉 Best for looping directly over values in an iterable (arrays, strings, sets, maps).
// Syntax:

for (let value of iterable) {
  console.log(value);
}

// Use case examples:
// When you only care about values, not indices
// Iterating arrays, strings, sets, maps

// Example:

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
// ***************************************************************************************
// ***************************************************************************************
// 5. for...in Loop
// 👉 Used for looping over object keys (properties).
// Syntax:

for (let key in object) {
  console.log(key, object[key]);
}

// Use case examples:
// Iterating over object properties
// When working with plain JavaScript objects
// ⚠️ Not recommended for arrays because it loops over keys (indices as strings), not values.
// Example:

let person = { name: "Manish", age: 25, city: "Pune" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// ***************************************************************************************
// ***************************************************************************************
// 6. Higher-order loops (ES6+)
// 👉 Technically not "loops", but methods that act like loops.
// .forEach() → good for iterating arrays (cannot break early).
// .map() → transform array into a new array.
// .filter() → filter elements based on condition.
// .reduce() → accumulate values.
// Example:

let arr = [1, 2, 3, 4];
arr.forEach((num) => console.log(num * 2)); // [2,4,6,8]
