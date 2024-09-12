document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll('.error-txt').forEach(el => el.textContent = '');

        // Name validation
        if (nameInput.value.trim() === '') {
            document.querySelector('#name + .error-txt').textContent = "Full Name can't be blank";
            isValid = false;
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            document.querySelector('#email + .error-txt').textContent = "Email address can't be blank";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
            document.querySelector('#email + .error-txt').textContent = "Email address is invalid";
            isValid = false;
        }

        // Phone validation
        if (phoneInput.value.trim() === '') {
            document.querySelector('#phone + .error-txt').textContent = "Phone number can't be blank";
            isValid = false;
        } else if (!/^\d{10}$/.test(phoneInput.value.trim())) {
            document.querySelector('#phone + .error-txt').textContent = "Phone number must be 10 digits";
            isValid = false;
        }

        // Subject validation
        if (subjectInput.value.trim() === '') {
            document.querySelector('#subject + .error-txt').textContent = "Subject can't be blank";
            isValid = false;
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            document.querySelector('#message + .error-txt').textContent = "Message can't be blank";
            isValid = false;
        }

        if (isValid) {
            // Send email using SMTP.js
            Email.send({
                SecureToken: "YOUR_SMTPJS_SECURE_TOKEN",
                To: 'recipient@example.com',
                From: emailInput.value.trim(),
                Subject: subjectInput.value.trim(),
                Body: `
                    Name: ${nameInput.value.trim()}<br>
                    Phone: ${phoneInput.value.trim()}<br>
                    Message: ${messageInput.value.trim()}
                `
            }).then(
                () => alert("Message sent successfully!")
            ).catch(
                (error) => alert("Failed to send message: " + error.message)
            );
        }
    });
});
