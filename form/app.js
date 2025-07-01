const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

// Feedback elements
const userFeedback = document.getElementById("userFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const passFeedback = document.getElementById("passFeedback");

// Validation flags
let validUser = false, validEmail = false, validPass = false;

// Helper: Enable or disable submit
const checkFormValidity = () => {
  submitBtn.disabled = !(validUser && validEmail && validPass);
};

// Username Validation
username.addEventListener("input", (e) => {
  const val = e.target.value.trim();

  if (val.length < 5) {
    userFeedback.textContent = "❌ Username must be at least 5 characters";
    userFeedback.className = "feedback error-feedback";
    validUser = false;
  } else {
    userFeedback.textContent = "✅ Looks good!";
    userFeedback.className = "feedback valid-feedback";
    validUser = true;
  }
  checkFormValidity();
});

// Email Validation
email.addEventListener("input", (e) => {
  const val = e.target.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(val)) {
    emailFeedback.textContent = "❌ Invalid email format";
    emailFeedback.className = "feedback error-feedback";
    validEmail = false;
  } else {
    emailFeedback.textContent = "✅ Email looks valid!";
    emailFeedback.className = "feedback valid-feedback";
    validEmail = true;
  }
  checkFormValidity();
});

// Password Validation
password.addEventListener("input", (e) => {
  const val = e.target.value;
  const strongPass = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (!strongPass.test(val)) {
    passFeedback.textContent = "❌ Must be 6+ chars, include 1 number & 1 capital";
    passFeedback.className = "feedback error-feedback";
    validPass = false;
  } else {
    passFeedback.textContent = "✅ Strong password!";
    passFeedback.className = "feedback valid-feedback";
    validPass = true;
  }
  checkFormValidity();
});

// Final validation on submit
form.addEventListener("submit", (e) => {
  if (!(validUser && validEmail && validPass)) {
    e.preventDefault();
    alert("Please fill out the form correctly before submitting.");
  }
});
