var btnEntrarCriarConta = document.getElementById("open-popup");
var popup = document.getElementById("popup");
var closePopupButton = document.getElementById("close-popup");
var createAccountLink = document.getElementById("create-account-link");
var returnToLoginLink = document.getElementById("return-to-login-link");
var loginForm = document.getElementById("login-form");
var createAccountForm = document.getElementById("create-account-form");

btnEntrarCriarConta.addEventListener("click", function() {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", function() {
  popup.style.display = "none";
});

createAccountLink.addEventListener("click", function() {
  loginForm.style.display = "none";
  createAccountForm.style.display = "block";
});

returnToLoginLink.addEventListener("click", function() {
  loginForm.style.display = "block";
  createAccountForm.style.display = "none";
});
