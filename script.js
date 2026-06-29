
"use strict";

const showLoginButton = document.querySelector("#showLogin");
const showRegisterButton = document.querySelector("#showRegister");

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const registerLink = document.querySelector("#registerLink");
const loginLink = document.querySelector("#loginLink");


function showLoginForm() {
  loginForm.classList.add("active-form");
  registerForm.classList.remove("active-form");

  showLoginButton.classList.add("active");
  showRegisterButton.classList.remove("active");
}


function showRegisterForm() {
  registerForm.classList.add("active-form");
  loginForm.classList.remove("active-form");

  showRegisterButton.classList.add("active");
  showLoginButton.classList.remove("active");
}


showLoginButton.addEventListener("click", showLoginForm);

showRegisterButton.addEventListener("click", showRegisterForm);

registerLink.addEventListener("click", showRegisterForm);

loginLink.addEventListener("click", showLoginForm);