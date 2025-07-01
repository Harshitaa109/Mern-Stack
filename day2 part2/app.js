// =======================
//Arrays & Objects
// =======================

// 1. Object Example (Key-Value pairs)
const cse08 = {
    name: "Harsh",
    address: "Calcutta, WB",
    bloodGroup: "O-",
};
console.log("👩‍🎓 Student Object:", cse08);

// Accessing values
console.log("Name:", cse08.name);           // Dot notation
console.log("Blood Group:", cse08['bloodGroup']); // Bracket notation (used when keys are dynamic or have spaces)

// Updating a value
cse08.address = "Delhi, India";
console.log("Updated Address:", cse08.address);

// Adding a new property
cse08.email = "harshita@example.com";
console.log("After adding email:", cse08);

// Deleting a property
delete cse08.bloodGroup;
console.log("After deleting blood group:", cse08);

// ----------------------
// 2. Array Example (Ordered collection)

const fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log("🍊 Fruit List:", fruits);

// Access by index
console.log("First Fruit:", fruits[0]);

// Update an item
fruits[1] = "Grapes";
console.log("Updated Fruits:", fruits);

// Add to the end
fruits.push("Pineapple");
console.log("After push:", fruits);

// Remove from the end
fruits.pop();
console.log("After pop:", fruits);

// Add to the start
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// Remove from start
fruits.shift();
console.log("After shift:", fruits);

fruits.splice(1, 2); // Remove 2 items starting from index 1
console.log("After splice (remove 2 from index 1):", fruits);

fruits.splice(1, 0, "Kiwi", "Peach"); // Add Kiwi and Peach at index 1
console.log("After splice (add Kiwi and Peach at index 1):", fruits);

fruits.indexOf("Mango"); // Find index of Mango
console.log("Index of Mango:", fruits.indexOf("Mango"));

// Check if an item exists
if (fruits.includes("Banana"))  {
    console.log("Banana is in the list.");
    } else {
        console.log("Banana is not in the list.");
    }

// Reverse the array
fruits.reverse();
console.log("Reversed Fruits:", fruits);




// Array length
console.log("Total Fruits:", fruits.length);

// ----------------------
// 3. Array of Objects (e.g., list of students)

const students = [
    { name: "Harsh", marks: 95 },
    { name: "Ami", marks: 88 },
    { name: "Rit", marks: 92 },
];

console.log(students.indexOf({ name: "Harsh", marks: 95 })); // -1 because objects are reference types
console.log("👨‍🎓 Students List:", students);

// Accessing individual object
console.log("Topper:", students[0].name);

// Loop through array of objects
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.marks} marks`);
});

// ----------------------
// 4. Nested Objects

const userProfile = {
    username: "harsh08",
    details: {
        age: 21,
        address: {
            city: "Calcutta",
            pin: 700001,
        },
        skills: ["JavaScript", "Python", "Data Science"],
    },
};

console.log("User Profile:", userProfile);
console.log("City:", userProfile.details.address.city);
console.log("Skills:", userProfile.details.skills[1]);

// ----------------------
// 5. Object Methods

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b; // Shorthand method syntax
    }
};

console.log("Addition:", calculator.add(10, 5));
console.log("Multiplication:", calculator.multiply(6, 4));

// ----------------------
// 6. Array Methods (map, filter, reduce, find)

const marks = [90, 75, 88, 60, 99];

// map – return new array with updated values
const updatedMarks = marks.map(mark => mark + 5);
console.log("Updated Marks (after grace):", updatedMarks);

// filter – get marks above 80
const highScorers = marks.filter(mark => mark > 80);
console.log("Marks > 80:", highScorers);

// reduce – sum all marks
const total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", total);

// find – get first student with >90 marks
const topper = students.find(s => s.marks > 90);
console.log("🎓 Topper:", topper.name);

// ----------------------
// 7. Array of Arrays (Matrix-like)

const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log("Matrix Row 2, Col 1:", matrix[1][0]); // Outputs: 3

// ----------------------
// 8. Destructuring

const person = {
    firstName: "Harsh",
    city: "Calcutta",
    hobby: "Reading"
};

const { firstName, hobby } = person;
console.log(`${firstName} loves ${hobby}`); // Harsh loves Reading

const colors = ["Red", "Green", "Blue"];
const [primary, secondary] = colors;
console.log(`Primary: ${primary}, Secondary: ${secondary}`);

// ----------------------
// 9. Spread Operator

const numb = [1, 2, 3];
const moreNumb = [...numb, 4, 5]; // Copy and add // ... spread operator
console.log("Extended Array:", moreNumb);

const newStudent = { ...cse08, roll: 108 };
console.log("Copied Student with Roll:", newStudent);

// this keyword in objects
// ----------------------
const persona = {
  name: "Harsh",
  height: 1.73, // in meters
  weight: 56,   // in kilograms
  college: "Lovely Professional University",
  rollNumber: 25,

  getBMI: function () {
    console.log(`Height: ${this.height} m`);
    console.log(`Weight: ${this.weight} kg`);
    
    const bmi = this.weight / (this.height **2);
    console.log(`BMI: ${bmi.toFixed(2)}`);
    if(bmi<20){
        console.log("You are underweight.");
    }
    else if(bmi>=20 && bmi<25){
        console.log("You are healthy.");
    }
    else{
        console.log("You are overweight.");
    }
  }
};

persona.getBMI();
persona.weight = 60; // Update weight
persona.getBMI(); // Recalculate BMI after weight change
const allKeys = Object.keys(persona);
console.log("All Keys in Persona:", allKeys); // Get all keys of the object
const allValues = Object.values(persona);
console.log("All Values in Persona:", allValues); // Get all values of the object
const allEntries = Object.entries(persona);
console.log("All Entries in Persona:", allEntries); // Get all key-value pairs as an array of arrays
const whichKey = "college";
if (whichKey in persona) {
    console.log(`${whichKey} exists in persona.`);
}
// Check if a key exists in the object
else {
    console.log(`${whichKey} does not exist in persona.`);
}
// Using Object.assign to copy properties
const newPersona = Object.assign({}, persona);
console.log("New Persona (copy of persona):", newPersona);
// Modifying the newPersona won't affect the original persona
newPersona.name = "Ami";
console.log("Modified New Persona Name:", newPersona.name);
console.log("Original Persona Name (unchanged):", persona.name);
// Using Object.freeze to prevent modifications
Object.freeze(persona);
// Attempting to modify a frozen object will not work
persona.name = "Rit"; // This will not change the name
console.log("After trying to change name in frozen persona:", persona.name); // Still "Ami"
// Using Object.seal to prevent adding new properties but allow modifications
const sealedPersona = Object.seal(persona);
// Attempting to add a new property will not work
sealedPersona.age = 21; // This will not add the age property   
console.log("After trying to add age in sealed persona:", sealedPersona.age); // Undefined
// But we can still modify existing properties
sealedPersona.weight = 65; // This will work
console.log("After modifying weight in sealed persona:", sealedPersona.weight); // 65
// Using Object.keys, Object.values, and Object.entries
const keys = Object.keys(sealedPersona);
console.log("Keys in Sealed Persona:", keys); // Get all keys
const values = Object.values(sealedPersona);
console.log("Values in Sealed Persona:", values); // Get all values
const entries = Object.entries(sealedPersona);
console.log("Entries in Sealed Persona:", entries); // Get all key-value pairs

// Using for...in loop to iterate over object properties
console.log("Iterating over Sealed Persona properties:");
for (const key in sealedPersona) {
    if (sealedPersona.hasOwnProperty(key)) {
        console.log(`${key}: ${sealedPersona[key]}`);
    }
}
// Using for...of loop with Object.entries
console.log("Using for...of with Object.entries:");
for (const [key, value] of Object.entries(sealedPersona)) {
    console.log(`${key}: ${value}`);
}

const person1={
    name: "Ami",
    age: 22,
    city: "Delhi",
    marks: {
        math: 90,
        science: 85,
        english: 88
    },
 };

 const person2={...person1};
 person2.name = "Rit"; // Changing name in person2
 console.log("Person 1 Name:",  person1.name); // Outputs: Ami
 console.log("Person 2 Name:",  person2.name); // Outputs: Rit
 person2.marks.math = 95; // Changing math marks in person2
 console.log("Person 1 Math Marks:", person1.marks.math); // Outputs: 90
 console.log("Person 2 Math Marks:", person2.marks.math); // Outputs: 95
 

 // Using find method to get the first element that matches a condition
 // Note: The variable name should match the one used in the console.log statement
 const myFunc = (a, b, c, d) => { 
  if (a == "mn") 
    return true; 
  else 
    return false;}; // <-- Syntax error here
const arr = ["ab", "xy", "mn", "pq"];  
const elem = arr.find(myFunc);  
console.log(" yellow dot something: elem", elem);


// Using find method to get the first student with marks > 90
// Note: The variable name should match the one used in the console.log statement
const student1 = [
    { name: "Harsh", marks: 95 },
    { name: "Ami", marks: 88 },
    { name: "Rit", marks: 92 },
];

const topper1 = student1.find(student => student.marks > 90);
const myFunction1=(b)=>{
    if(b.name === "Harsh")return true;
    else return false;
};
console.log("Topper found:", topper1);
console.log("Topper found using myFunction1:", student1.find(myFunction1));

// Using map to create a new array with status based on marks
// Note: The variable name should match the one used in the console.log statement
const student2 = [
    { name: "Harsh", marks: 95, city: "Calcutta" },
    { name: "Ami", marks: 88 , city: "Delhi" },
    { name: "Rit", marks: 92 , city: "Mumbai"},
];
const myFunction2 = (student) => { 
    if (student.score < 25) {
        return { ...student, status: "Fail" };
    } else {
        return  { ...student, status: "Pass" };
    }
};
const resArr = student2.map(myFunction2);
console.log("Student with status:", resArr);
