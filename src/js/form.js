container = document.querySelector('.container.register')
pwShowHide = document.querySelectorAll('.showHidePassword');
pwFields = document.querySelectorAll('.password');
signUp = document.querySelector('.signup-link');
login = document.querySelector('.login-link');

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
