const container = document.querySelector('.container.register')
const pwShowHide = document.querySelectorAll('.showHidePassword');
const pwFields = document.querySelectorAll('.password');
const signUp = document.querySelector('.signup-link');
const login = document.querySelector('.login-link');

// Show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        pwFields.forEach(pwField => {
            if(pwField.type === 'password') {
                pwField.type = 'text';

                pwShowHide.forEach(icon => {
                    icon.classList.replace('bi-eye-slash', 'bi-eye')
                })
            }else {
                pwField.type = 'password';

                pwShowHide.forEach(icon => {
                    icon.classList.replace('bi-eye', 'bi-eye-slash')
                })
            }
        })
    })   
})

// Appear signup and login form
signUp.addEventListener('click', () => {
    container.classList.add('active');
});
login.addEventListener('click', () => {
    container.classList.remove('active');
});

// Login form verification
const loginForm = document.querySelector('#login_form');
const usernameLog = document.querySelector('#username_log');
const passwordLog = document.querySelector('#password_log');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginFormVerify();

    if(result.length === 2) {
        alert("Login!");
    };
})

function loginFormVerify() {
    result = [];

    // Input value
    const usernameLogValue = usernameLog.value.trim();
    const passwordLogValue = passwordLog.value.trim();

     // Username check
     if(usernameLogValue === '') {
        let message = "Required field";
        setErrorLog(usernameLog, message);
    }else if(!usernameLogValue.match(/^[a-zA-Z]/)) {
        let message = "";
        setErrorLog(usernameLog, message);
    }else {
        let letterNum = usernameLogValue.length;
        if(letterNum < 3) {
            let message = "";
            setErrorLog(usernameLog, message);
        }else if(usernameLogValue != usernameTest) {
            let message = "";
            setErrorLog(usernameLog, message);
        }else {
            setSuccessLog(usernameLog);
            result.push(1);
        }
    }

    // Password check
    if(passwordLogValue === '') {
        let message = "Required field";
        setErrorLog(passwordLog, message);
    }else if(!passwordVerifyLength(passwordLogValue)) {
        let message = "Wrong password"
        setErrorLog(passwordLog, message)
    }else if(passwordVerifyLength(passwordLogValue) && !passwordVerifyAll(passwordLogValue)) {
        let message = "Wrong password"
        setErrorLog(passwordLog, message)
    }else if(usernameLogValue === usernameTest && passwordLogValue != passwordTest) {
        let message = "Wrong password";
        setErrorLog(usernameLog, message);
    }else {
        setSuccessLog(passwordLog);
        result.push(1);
    }
}

function setErrorLog(elem, message) {
    const inputField = elem.parentElement;
    const small = inputField.nextSibling.nextElementSibling; 

    small.classList.add('error');
    small.innerText = message;
}

function setSuccessLog(elem) {
    const inputField = elem.parentElement;
    const small = inputField.nextSibling.nextElementSibling;

    small.classList.remove('error');
    small.innerText = "";
}


// Test connection
const usernameTest = "John";
const passwordTest = "Password123@";

// Register form verification
const registerForm = document.querySelector('#register_form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const comfirmPassword = document.querySelector('#comfirmPassword');
const checkbox = document.getElementById('signCheck');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formVerify();

    if(result.length === 5) {
        alert("form sent!");
    };
})

function formVerify() {
    result = [];

    // Input value
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const comfirmPasswordValue = comfirmPassword.value.trim();
    
    // Username check
    if(usernameValue === '') {
        let message = "Required field";
        setError(username, message);
    }else if(!usernameValue.match(/^[a-zA-Z]/)) {
        let message = "Username must start with a letter";
        setError(username, message);
    }else {
        let letterNum = usernameValue.length;
        if(letterNum < 3) {
            let message = "Username must be at least 3 characters long";
            setError(username, message);
        }else {
            setSuccess(username);
            result.push(1);
        }
    }

    // Email check
    if(emailValue === '') {
        let message = "Required field";
        setError(email, message);
    }else if(!emailVerify(emailValue)) {
        let message = "Invalid email"
        setError(email, message)
    }else {
        setSuccess(email);
        result.push(1);
    }

    // Password check
    if(passwordValue === '') {
        let message = "Required field";
        setError(password, message);
    }else if(!passwordVerifyLength(passwordValue)) {
        let message = "Password too short (minimum 8 characters)"
        setError(password, message)
    }else if(passwordVerifyLength(passwordValue) && !passwordVerifyAll(passwordValue)) {
        let message = "Password must contain at least 1 number, 1 capital letter, 1 special character and no space"
        setError(password, message)
    }else {
        setSuccess(password);
        result.push(1);
    }

    // Comfirm password check
    if(comfirmPasswordValue === '') {
        let message = "Required field";
        setError(comfirmPassword, message);
    } else if(comfirmPasswordValue != passwordValue) {
        let message = "Password do not match";
        setError(comfirmPassword, message);
    } else {
        setSuccess(comfirmPassword);
        result.push(1);
    }

    // Checkbox check
    const inputCheckbox = document.querySelector('.checkbox-text.signUp');
    const small = inputCheckbox.nextSibling.nextElementSibling;

    if(!checkbox.checked) {
        small.classList.add('error');
        small.innerText = "You must accept the terms and conditions to register an account";
    } else {
        small.classList.remove('error');
        small.innerText = "";
        result.push(1);
    }
}

function setError(elem, message) {
    const inputField = elem.parentElement;
    const small = inputField.nextSibling.nextElementSibling; 

    inputField.classList.add('error');
    inputField.classList.remove('success');

    small.classList.add('error');
    small.innerText = message;
}

function setSuccess(elem) {
    const inputField = elem.parentElement;
    const small = inputField.nextSibling.nextElementSibling;

    inputField.classList.add('success');
    inputField.classList.remove('error');

    small.classList.remove('error');
    small.innerText = "";
}

function emailVerify(email) {
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}

function passwordVerifyLength(password) {
    return /^[a-zA-Z0-9!@#$%^&*+]{8,}$/.test(password);
}

function passwordVerifyAll(password) {
    return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+])[a-zA-Z0-9!@#$%^&*+]{8,}$/.test(password);
}
