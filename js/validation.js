$(document).ready(function() {
  // Existing contact form validation
  $("#contactForm").submit(function(e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();

    if(!name || !email || !message || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    if(password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Show modal on success
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    // Reset form
    $("#contactForm")[0].reset();
    $('#passwordStrength').text('');
    $('#confirmMessage').text('');
  });

  // Password strength checker
  function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[@$!%*?&]/)) strength++;

    switch(strength) {
      case 0:
      case 1:
        return {text: "Weak", color: "red"};
      case 2:
        return {text: "Moderate", color: "orange"};
      case 3:
      case 4:
        return {text: "Strong", color: "green"};
    }
  }

  $('#password').on('keyup', function() {
    const password = $(this).val();
    const strength = checkPasswordStrength(password);
    $('#passwordStrength').text(strength.text).css('color', strength.color);
  });

  $('#confirmPassword').on('keyup', function() {
    const confirmPassword = $(this).val();
    const password = $('#password').val();
    if(confirmPassword === password) {
      $('#confirmMessage').text("Passwords match").css('color', 'green');
    } else {
      $('#confirmMessage').text("Passwords do not match").css('color', 'red');
    }
  });
});