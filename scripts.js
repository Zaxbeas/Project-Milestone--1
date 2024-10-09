// Form validation for Contact page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            // Check if the required fields are not empty
            if (!name || !email) {
                event.preventDefault(); // Stop form submission if fields are empty
                alert('Please fill out both the Name and Email fields.');
            }
        });
    }
});
