// ================================
// DOM Manipulation with JavaScript
// ================================

// Step 1: Access the parent element where you want to insert new elements
// Assumes there's an element in your HTML like: <div id="root"></div>
const parent = document.getElementById("root"); // Grabs the element with id "root"

// ------------------------------
// Creating the First <h1> Element
// ------------------------------

// Step 2: Create a new <h1> HTML element dynamically
const title1 = document.createElement("h1"); // This does NOT add it to the page yet

// Step 3: Add content inside the new <h1> tag
title1.innerText = "Hello from DOM 1"; // Sets the visible text of the element

// Step 4: Style the <h1> tag using JavaScript
title1.style.textDecoration = "underline";         // Underlines the text
title1.style.textDecorationColor = "magenta";      // Sets underline color to magenta

// Step 5: Append the element to the DOM so it's visible in the browser
parent.append(title1); // Adds <h1>Hello from DOM 1</h1> to the #root container

// ------------------------------
// Creating a Second <h1> Element
// ------------------------------

// Step 6: Repeat to create another dynamic element
const title2 = document.createElement("h1"); // Another <h1> element
title2.innerText = "Hello from DOM 2"; // Set its content

// Optional Styling (if needed)
// title2.style.color = "green";
// title2.style.fontSize = "28px";

parent.append(title2); // Adds second heading to #root
