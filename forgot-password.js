// Get the form element
const forgotPasswordForm = document.getElementById('forgot-password-form');

// Add an event listener to handle form submission
forgotPasswordForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Get the email value from the form
  const email = document.getElementById('reset-email').value.trim();

  // Validate the email format (basic validation)
  if (!validateEmail(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
    });
    return;
  }

  // Simulate sending a password reset link
  try {
    // Replace this with actual backend API integration
    const response = await fakeApiCall(email);

    if (response.success) {
      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'A password reset link has been sent to your email.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: response.message,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An unexpected error occurred. Please try again later.',
    });
  }
});

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simulate API call (replace this with actual backend API integration)
function fakeApiCall(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'test@example.com') {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: 'Email not registered.' });
      }
    }, 1000);
  });
}
