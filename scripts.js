// Form validation for Contact page with email format check
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // Simple email validation pattern

            // Check if the required fields are not empty and the email is in a valid format
            if (!name || !email) {
                event.preventDefault(); // Stop form submission if fields are empty
                alert('Please fill out both the Name and Email fields.');
            } else if (!emailPattern.test(email)) {
                event.preventDefault(); // Stop form submission if email format is incorrect
                alert('Please enter a valid email address.');
            }
        });
    }
});
