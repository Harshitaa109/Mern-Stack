//iterating over arrays in JavaScript

const arr = ["cat", "dog", "fish", "bird"];

// ✅ Most basic and flexible - use when you need index and full control
for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    console.log(elem, i); // prints value and index
    // ✅ Best for: full control over the loop, early exit (break/continue), working with sparse arrays
    // ❌ Verbose compared to modern alternatives
}

// ⚠️ Avoid using `for...in` on arrays
for (let i in arr) {
    const elem = arr[i];
    console.log(elem, i); // prints value and index (index as string)
    // ⚠️ `for...in` is designed for objects, not arrays
    // 🔴 It iterates over all **enumerable properties**, not just array elements
    // 🔴 May include properties inherited via prototype
    // ❌ Do not use with arrays unless you know what you're doing
}

// ✅ Cleanest for just values
for (let value of arr) {
    console.log(value); // prints only values
    // ✅ Best for: iterating over array values
    // ❌ No access to index directly
    // ❌ Cannot break or return from enclosing function in forEach-like fashion
}

// ✅ Functional style - concise and readable
arr.forEach((elem, i) => {
    console.log(elem, i); // prints value and index
    // ✅ Best for: short operations on each element
    // ❌ Cannot use `break` or `continue` (no early exit)
    // ❌ Slightly slower than for-loop in some cases
});


