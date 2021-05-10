const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function loginValidate() {
  var x = document.forms["login"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  var y = document.forms["loginform"]["password"].value;
  if (y == "") {
    alert("Password must be filled out");
    return false;
  }
} 
let menuButton = document.querySelector(".button-menu");
let container = document.querySelector(".container");
let pageContent = document.querySelector(".page-content");
let responsiveBreakpoint = 991;

if (window.innerWidth <= responsiveBreakpoint) {
  container.classList.add("nav-closed");
}

menuButton.addEventListener("click", function () {
  container.classList.toggle("nav-closed");
});

pageContent.addEventListener("click", function () {
  if (window.innerWidth <= responsiveBreakpoint) {
    container.classList.add("nav-closed");
  }
});


window.addEventListener("resize", function () {
  if (window.innerWidth > responsiveBreakpoint) {
    container.classList.remove("nav-closed");
  }
});