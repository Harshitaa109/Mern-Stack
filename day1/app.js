// app.js

// Print message to console
window.console.log("Hello from JS!");

// === Variable Declaration and Initialization ===

// 1. Using var
var age = 21; // function-scoped
console.log("Age using var:", age);

// 2. Using let
let name = "Harsh"; // block-scoped
console.log("Name using let:", name);

// 3. Using const
const birthYear = 2003; // block-scoped, can't be reassigned
console.log("Birth Year using const:", birthYear);

// 4. Re-declaring variables
var testVar = 10;
var testVar = 20; // allowed with var
console.log("Re-declared var:", testVar);

// let testLet = 30;
// let testLet = 40; //  SyntaxError: Identifier 'testLet' has already been declared

// 5. Reassigning variables
let city = "Delhi";
city = "Mumbai"; // ✅ allowed
console.log("Updated city:", city);

// const country = "India";
// country = "Bharat"; // TypeError: Assignment to constant variable

// 6. Declaration without initialization
let score;
console.log("Uninitialized score (let):", score); // undefined

var count;
console.log("Uninitialized count (var):", count); // undefined

// 7. Const without initialization
// const grade; //  SyntaxError: Missing initializer in const declaration

// === Type Checking ===
let isAdult = true;
let height = 5.6;
let user = null;
let nothing;
let symbol = Symbol('id');
let bigIntValue = 1234567890123456789012345678901234567890n;

console.log("Types:");
console.log("String:", typeof name);
console.log("Number:", typeof height);
console.log("Boolean:", typeof isAdult);
console.log("Null:", typeof user); // 👀 returns 'object' (quirk in JS)
console.log("Undefined:", typeof nothing);
console.log("Symbol:", typeof symbol);
console.log("BigInt:", typeof bigIntValue);

// === Hoisting Example ===
console.log("Hoisted var:", hoistedVar); // undefined
var hoistedVar = "I'm hoisted";

// console.log("Hoisted let:", hoistedLet); //  ReferenceError
let hoistedLet = "I'm not hoisted";

// === Block Scope Example ===
{
    let blockScoped = "Inside block";
    var functionScoped = "Also inside block, but var";
    console.log("Block scoped inside:", blockScoped);
}
// console.log("Block scoped outside:", blockScoped); //  ReferenceError
console.log("Function scoped outside:", functionScoped); // Accessible
