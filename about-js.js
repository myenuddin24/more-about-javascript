/* ----------------- JavaScript ------------------ */
/*
JavaScript is a:

1. JIT (Just-In-Time) Compiled Language
   - JavaScript code is compiled and executed at runtime.
   - It helps JavaScript run efficiently.

2. Multi-Paradigm Language
   - JavaScript supports different programming styles.
   - Example: Procedural, Object-Oriented, Functional programming.

3. Prototype-Based Language
   - JavaScript uses prototypes for inheritance.
   - Objects can inherit properties and methods from other objects
     through the prototype chain.

4. Dynamically Typed Language
   - We don't need to declare a variable's data type.
   - The type can change during runtime.

   Example:
   let value = 10;
   value = "Hello";

5. Garbage Collection
   - JavaScript automatically removes objects/data that are no longer
     needed from memory.
   - This helps manage memory automatically.

6. High Abstraction:

- Hides complex, low-level implementation details.
- Allows developers to focus on what the program should do,
  rather than how the computer does it.

Example:
console.log("Hello");

We don't need to know how the browser internally handles
memory, system calls, or output operations.
*/





/* --------- JavaScript Execution Context and Call stack ----------- */
/*
Execution Context:
- An environment where JavaScript code is executed.
- It keeps track of variables, functions, and the current code.

Types:
1. Global Execution Context
2. Function Execution Context

Call Stack:
- A LIFO (Last In, First Out) data structure.
- It keeps track of function calls.
- When a function is called, it is pushed onto the stack.
- When the function finishes, it is removed (popped) from the stack.

Simple flow:

JavaScript Code
      ↓
Execution Context
      ↓
Call Stack
      ↓
Function Execution


Execution Context = where/how JavaScript code execute hocche.
Call Stack = kon function ekhon execute hocche and function call er order track kora.
*/




/* --------- Single-threaded, Asynchronous vs Synchronous ---------- */
/*
1. Single-threaded:
- JavaScript is a single-threaded language.
- It can execute one JavaScript task at a time on its main thread.
- It follows the Call Stack to execute code.

Example:
console.log("A");
console.log("B");

Output:
A
B


2. Synchronous:
- Synchronous means code executes one task at a time
  in order.
- JavaScript waits for the current task to finish before
  moving to the next task.

Example:
console.log("A");
console.log("B");
console.log("C");

Output:
A
B
C


3. Asynchronous:
- Asynchronous means JavaScript does not wait for certain
  time-consuming operations to finish.
- It can continue executing other code while waiting.
- Examples: setTimeout(), fetch(), API requests.

Example:
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");

Output:
A
C
B


Important:

Single-threaded ≠ Only synchronous

JavaScript is single-threaded, but it can handle
asynchronous operations with the help of the runtime,
Web APIs, Callback Queue, and Event Loop.
*/




/* -----------------  Promise | Async/Await ------------------ */
/*
Promise:
- Promise is an object that represents the future result of an 
  asynchronous operation.

- A Promise has 3 states:
  1. Pending   -> Operation is still running
  2. Fulfilled -> Operation completed successfully
  3. Rejected  -> Operation failed

- We can handle a Promise using:
  .then()  -> handles successful result
  .catch() -> handles error


Async/Await:
- async and await are used to handle Promises more easily.
- async makes a function asynchronous.
- await waits for a Promise to resolve before moving to the next line.
- await can only be used inside an async function
  (except top-level await in supported environments).

Example:

const loadData = async () => {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
}
 

Important:
- async/await is a cleaner and easier way to work with Promises.
- async/await does NOT replace Promise.
- It is built on top of Promises.
*/




/* ----------- settimeout, setInterval and clearInterval ------------ */
/*
setTimeout():
- setTimeout() executes a function only once after a specified amount of time.
- Time is measured in milliseconds.
- 1000 milliseconds = 1 second.

Example:
setTimeout(() => {
  console.log("Hello");
}, 2000);
// Runs once after 2 seconds.


setInterval():
- setInterval() executes a function repeatedly after a specified time interval.
- It keeps running until it is stopped.
- Time is measured in milliseconds.

Example:
setInterval(() => {
  console.log("Hello");
}, 2000);
// Runs every 2 seconds.


clearInterval():
- clearInterval() is used to stop a setInterval().
- We need to store the interval ID in a variable.

Example:
const intervalId = setInterval(() => {
  console.log("Hello");
}, 2000);

clearInterval(intervalId);
// Stops the interval.


Important:
- setTimeout() -> Runs once after a delay.
- setInterval() -> Runs repeatedly after a fixed interval.
- clearInterval() -> Stops a setInterval().
*/




/* ---------- JavaScript Event loop and concurrency ----------- */
/*
JavaScript Event Loop:
- JavaScript is single-threaded.
- It can execute one JavaScript task at a time.
- The Event Loop helps JavaScript handle asynchronous operations.
- It checks whether the Call Stack is empty.
- If the Call Stack is empty, it moves a callback from the
  Callback Queue to the Call Stack.

Basic Flow:

Async Operation
  ↓
Callback Queue
  ↓
Event Loop
  ↓
Call Stack
  ↓
Execute


Concurrency:
- Concurrency means handling multiple tasks in an overlapping way.
- JavaScript does not execute multiple JavaScript tasks at the same time
  on its main thread.
- It uses the runtime, Callback Queue, and Event Loop to handle
  asynchronous operations efficiently.

Example:

console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");

Output:
A
C
B
*/

