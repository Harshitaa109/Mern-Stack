// ========================
// BOM & DOM Exploration
// ========================

// ---------------------------
// Understanding BOM (Browser Object Model)
// ---------------------------

// Logs the global window object which includes location, history, navigator, etc.
console.log("window object: ", window);

// Logs the document object, which represents the entire HTML page loaded in the browser
console.log("document object: ", window.document);

// Prints out the inner HTML of a specific element using deep DOM navigation
console.dir(document.children[0].children[1].children[0].innerHTML);

// ---------------------------
// DOM (Document Object Model)
// ---------------------------

// getElementsByTagName() returns an HTMLCollection (live and array-like, not a real array)
// This selects all <h3> elements in the document
const headings = document.getElementsByTagName("h3");
console.log("All <h3> elements: ", headings);

// getElementsByTagName() used to get all <header> tags in the document
const header = document.getElementsByTagName("header");
console.log("All <header> elements: ", header);

// Changing the text content of the first and second <h3> elements
if (headings.length > 0) headings[0].innerText = "Hello World";
if (headings.length > 1) headings[1].innerText = "Hello World 2";

// ---------------------------
// getElementsByClassName()
// ---------------------------

// Selects all elements with class "text-brown" (returns HTMLCollection)
const elements = document.getElementsByClassName("text-brown");
console.log("Elements with class 'text-brown': ", elements);

// Changing color to brown for the first and second matched elements
if (elements.length > 0) elements[0].style.color = "brown";
if (elements.length > 1) elements[1].style.color = "brown";

// ---------------------------
// querySelectorAll()
// ---------------------------

// Selects all <h3> elements using CSS selector syntax (returns NodeList)
const titles = document.querySelectorAll("h3");
console.log("querySelectorAll - <h3> tags: ", titles);

// Selects all elements with class "text-brown" using CSS class selector
const textBrownElements = document.querySelectorAll(".text-brown");
console.log("querySelectorAll - elements with .text-brown class: ", textBrownElements);

// Selects the element with ID "text-1"
const textPara = document.querySelectorAll("#text-1");
console.log("querySelectorAll - element with ID 'text-1': ", textPara);

// Selects the element with ID "text-2"
const textPara2 = document.querySelectorAll("#text-2");
console.log("querySelectorAll - element with ID 'text-2': ", textPara2);

// ---------------------------
// Optional: Safe DOM Manipulation
// ---------------------------

// Modify text or style safely using querySelector
const firstTitle = document.querySelector("h3");
if (firstTitle) firstTitle.innerText = "Updated using querySelector";

// Modify color of an element with ID safely
const text1 = document.querySelector("#text-1");
if (text1) text1.style.color = "teal";

// Change font size of an element with class
const brownText = document.querySelector(".text-brown");
if (brownText) brownText.style.fontSize = "18px";
