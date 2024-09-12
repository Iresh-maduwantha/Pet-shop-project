document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const chartButton = document.getElementById('chart-button');
    const shoppingButton = document.getElementById('shopping-button');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Searching for:', query);
                // Add your search logic here, e.g., perform an API call or redirect to a search results page
            } else {
                console.log('Search input is empty');
            }
        });
    
        chartButton.addEventListener('click', function() {
            console.log('Chart button clicked');
            // Add your chart display logic here, e.g., open a chart modal or redirect to a chart page
        });
    
        shoppingButton.addEventListener('click', function() {
            console.log('Shopping Today button clicked');
            // Add your shopping logic here, e.g., open a shopping list or redirect to a shopping page
        });
    });
    

        // Clear previous errors
        document.querySelectorAll('.error-txt').forEach(error => error.textContent = '');

        // Validate Full Name
        const fullname = document.getElementById('fullname');
        if (fullname.value.trim() === '') {
            document.getElementById('fullnameError').textContent = "Full Name can't be blank";
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            document.getElementById('emailError').textContent = "Invalid email address";
            isValid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone');
        const phonePattern = /^\d{10}$/; // Example pattern for 10-digit phone numbers
        if (!phonePattern.test(phone.value.trim())) {
            document.getElementById('phoneError').textContent = "Phone number must be 10 digits";
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password');
        if (password.value.trim() === '') {
            document.getElementById('passwordError').textContent = "Password can't be blank";
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = document.getElementById('confirmPassword');
        if (confirmPassword.value.trim() === '') {
            document.getElementById('confirmPasswordError').textContent = "Please confirm your password";
            isValid = false;
        } else if (password.value.trim() !== confirmPassword.value.trim()) {
            document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

