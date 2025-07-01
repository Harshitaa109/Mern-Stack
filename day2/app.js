// =============================
// Day 2: Functions and Callbacks
// =============================

// 1. Arrow Function to print a bill
const printBill = (amount) => {
    console.log("____________________");
    console.log("Rs.", amount);
    console.log("____________________");
};

// ------------------------------
// 2. Arrow Functions to calculate bill for different items

// For food, tax is 5%
const calculateBillAmountForFood = (price) => {
    return price * 1.05; // Price + 5% tax
};

// For clothes, tax is 12%
const calculateBillAmountForClothes = (price) => {
    return price * 1.12; // Price + 12% tax
};

// For drinks, tax is 20%
const calculateBillAmountForDrinks = (price) => {
    return price * 1.2; // Price + 20% tax
};

// ------------------------------
// 3. Function to generate total bill using above functions

const generateBill = (food, clothes, drinks) => {
    const foodAmount = calculateBillAmountForFood(food);
    const clothesAmount = calculateBillAmountForClothes(clothes);
    const drinksAmount = calculateBillAmountForDrinks(drinks);
    
    const finalAmount = foodAmount + clothesAmount + drinksAmount;

    printBill(finalAmount); // Using callback here
};

generateBill(100, 400, 100); // You’ll get a formatted printed bill with tax included

// ------------------------------
// 4. Callbacks: Functions as Arguments

const calculator = (a, b, operation) => {
    return operation(a, b); // Calling the callback function
};

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("Addition:", calculator(10, 5, add));        // 15
console.log("Multiplication:", calculator(10, 5, multiply)); // 50

// ✅ Explanation:
// `calculator` is a **higher-order function** – it takes another function (`operation`) as an argument.
// `add` and `multiply` are **callback functions**, passed to `calculator` to perform dynamic operations.

// ------------------------------
// 5. Function Declaration vs Function Expression

// Function Declaration (can be hoisted)
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("world"));

// Function Expression (not hoisted)
const farewell = function(name) {
    return `Goodbye, ${name}`;
};
console.log(farewell("world"));

// Arrow Function
const wish = (name) => `Have a great day, ${name}!`;
console.log(wish("world"));

// ------------------------------
// 6. Anonymous Function Example

setTimeout(function () {
    console.log("⏳ This runs after 2 seconds (Anonymous Function)");
}, 2000);

// ------------------------------
// 7. Arrow Function inside another function (Callback in Action)

const handleData = (data, callback) => {
    console.log("Processing data...");
    const processed = data.toUpperCase();
    callback(processed); // Callback used here
};

handleData("hello javascript", (result) => {
    console.log("✅ Processed Result:", result);
});

// ------------------------------
// 8. Default Parameters in Functions

const greetUser = (name = "Guest") => {
    console.log(`Hello, ${name}!`);
};
greetUser(); // "Hello, Guest!"
greetUser("world");

// ------------------------------
// 9. Immediately Invoked Function Expression (IIFE)

(function() {
    console.log("🚀 IIFE executed immediately!");
})();

// ------------------------------
// 10. Function with Rest Parameters

const totalMarks = (...marks) => {
    return marks.reduce((acc, val) => acc + val, 0);
};
console.log("Total Marks:", totalMarks(90, 85, 92, 88)); // Sum of all arguments

// ------------------------------
// 11. Real-World Style Callback Example

const downloadFile = (url, callback) => {
    console.log(`Downloading from ${url}...`);
    setTimeout(() => {
        console.log("Download complete!");
        callback(); // Simulating success
    }, 2000);
};

downloadFile("http://example.com/file.zip", () => {
    console.log("🎉 Now extracting the file...");
});