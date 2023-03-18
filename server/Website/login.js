const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var username = loginForm.username.value;

    if (username === "user") {
        document.location="http://localhost:8080/home.html";
        
        username = "";
    } else {
        document.location="http://localhost:8080/index.html";
    }
})