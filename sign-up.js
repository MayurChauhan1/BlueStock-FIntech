document.getElementById('sign-up-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
  
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
  
    // Clear previous errors
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
  
    let isValid = true;
  
    // Username validation
    if (!username) {
      usernameError.textContent = 'Username is required.';
      isValid = false;
    } else if (username.length < 3) {
      usernameError.textContent = 'Username must be at least 3 characters long.';
      isValid = false;
    }
  
    // Email validation
    if (!email) {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    // Password validation
    if (!password) {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
      isValid = false;
    }
  
    // Confirm password validation
    if (!confirmPassword) {
      confirmPasswordError.textContent = 'Please confirm your password.';
      isValid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      isValid = false;
    }
  
    if (isValid) {
      Swal.fire({
        icon: 'success',
        title: 'Sign Up Successful!',
        text: 'Your account has been created!',
      });
      // Here you can send data to your server
    }
  });
  
  // Password Strength Indicator
  const passwordInput = document.getElementById('password');
  const passwordStrength = document.getElementById('password-strength');
  
  passwordInput.addEventListener('input', function () {
    const value = passwordInput.value;
    if (value.length === 0) {
      passwordStrength.textContent = '';
    } else if (value.length < 6) {
      passwordStrength.textContent = 'Weak';
      passwordStrength.className = 'weak';
    } else if (value.length < 10) {
      passwordStrength.textContent = 'Medium';
      passwordStrength.className = 'medium';
    } else {
      passwordStrength.textContent = 'Strong';
      passwordStrength.className = 'strong';
    }
  });
  