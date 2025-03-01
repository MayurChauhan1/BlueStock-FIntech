document.getElementById('sign-in-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    // Clear previous errors
    emailError.textContent = '';
    passwordError.textContent = '';
  
    // Validation rules
    let isValid = true;
  
    if (!email) {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    if (!password) {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
      isValid = false;
    }
  
    // Show success message if valid
    if (isValid) {
      Swal.fire({
        icon: 'success',
        title: 'Sign In Successful!',
        text: 'Welcome back!',
      });
      // Here you can send data to your server
    }
  });
  