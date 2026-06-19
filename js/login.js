
const container = document.querySelector(".container");
const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");

registerBtn.addEventListener("click", () => {
    // console.log("Register Btn click");
    container.classList.add("active");
});
loginBtn.addEventListener("click", () => {
    // console.log("Login Btn click");
    container.classList.remove("active");
});

        // Form Validation
const signUpForm = document.querySelector(".sign-up form");
const signInForm = document.querySelector(".sign-in form");

// SIGN UP Validation
signUpForm.addEventListener("submit", (e) => {
    console.log(e);    
    e.preventDefault();

    const inputs = signUpForm.querySelectorAll("input");
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value.trim();
    const confirmPassword = inputs[3].value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    alert("Registration Successful");
    container.classList.remove("active");
});

// SIGN IN Validation
signInForm.addEventListener("submit", (e) => {
    // e.preventDefault();

    const inputs = signInForm.querySelectorAll("input");
    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    if (!username || !password) {
        alert("Please fill all fields!");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }
    alert("Login Successful");
});

        // Show & Hide Password 
const togglePassword = (inputId, icon) => {
    const input = document.getElementById(inputId);

    icon.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
        else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
};

        // This is Apply to all password fields
togglePassword("loginPassword", document.querySelector("#loginEye"));
togglePassword("signupPassword", document.querySelector("#signupEye"));
togglePassword("confirmPassword", document.querySelector("#confirmEye"));


