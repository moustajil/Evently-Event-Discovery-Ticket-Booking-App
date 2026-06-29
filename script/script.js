"use strict";

// Switch buttons
const showLoginButton = document.querySelector("#showLogin");
const showRegisterButton = document.querySelector("#showRegister");

// Forms
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

// Links
const registerLink = document.querySelector("#registerLink");
const loginLink = document.querySelector("#loginLink");

// Login inputs
const emailLogin = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const rememberMe = document.getElementById("rememberMe");

// Register inputs
const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");

// Buttons
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");

function showLoginForm(event) {
  event?.preventDefault();

  loginForm.classList.add("active-form");
  registerForm.classList.remove("active-form");

  showLoginButton.classList.add("active");
  showRegisterButton.classList.remove("active");
}

function showRegisterForm(event) {
  event?.preventDefault();

  registerForm.classList.add("active-form");
  loginForm.classList.remove("active-form");

  showRegisterButton.classList.add("active");
  showLoginButton.classList.remove("active");
}

showLoginButton.addEventListener("click", showLoginForm);
showRegisterButton.addEventListener("click", showRegisterForm);
registerLink.addEventListener("click", showRegisterForm);
loginLink.addEventListener("click", showLoginForm);

// Login validation
function checkLogin() {
  const email = emailLogin.value.trim();
  const password = loginPassword.value.trim();

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  if (rememberMe.checked) {
    localStorage.setItem("loginEmail", email);
  } else {
    localStorage.removeItem("loginEmail");
  }

  console.log(`Login email: ${email}`);
  console.log(`Login password: ${password}`);

  alert("Login successful");
}

// Register validation
function checkRegister() {
  const name = registerName.value.trim();
  const email = registerEmail.value.trim();
  const password = registerPassword.value;
  const confirmedPassword = confirmPassword.value;

  if (!name || !email || !password || !confirmedPassword) {
    alert("Please fill in all registration fields.");
    return;
  }

  if (password !== confirmedPassword) {
    alert("Passwords do not match.");
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully");

  registerForm.reset();
  showLoginForm();
}

// Submit forms
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkLogin();
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkRegister();
});

// Load remembered email
const savedEmail = localStorage.getItem("loginEmail");

if (savedEmail) {
  emailLogin.value = savedEmail;
  rememberMe.checked = true;
}