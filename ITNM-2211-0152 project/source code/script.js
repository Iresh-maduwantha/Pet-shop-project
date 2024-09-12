document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', (event) => {
        let valid = true;

        // Reset error messages
        usernameError.style.display = 'none';
        passwordError.style.display = 'none';

        // Validate Username
        if (usernameField.value.trim() === '') {
            usernameError.style.display = 'block';
            valid = false;
        }

        // Validate Password
        if (passwordField.value.trim() === '') {
            passwordError.style.display = 'block';
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form from submitting
        }
    });
});

