// Select the form
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Get the email value
  const email = contactForm.querySelector('input[type="email"]').value;

  // Simple email validation: must contain '@'
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return; // Stop if email is invalid
  }

  // If email is valid, show success notification
  alert('Your message has been sent!');

  // Reset the form to clear all fields
  contactForm.reset();
});