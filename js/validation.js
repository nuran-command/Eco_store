// validation.js
$(document).ready(function() {
    $("#contactForm").submit(function(e) {
      e.preventDefault();
  
      const name = $("#name").val().trim();
      const email = $("#email").val().trim();
      const message = $("#message").val().trim();
  
      if(!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
      }
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
      }
  
      // Show modal on success
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
  
      // Reset form
      $("#contactForm")[0].reset();
    });
  });