document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Dummy validation (replace with actual logic)
    if (username === "user" && password === "password") {
      // Successful login, redirect or do something
      alert("Login successful!");
      // Example redirecting to another page
      window.location.href = "dashboard.html";
    } else {
      // Display error message
      var errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Invalid username or password. Please try again.";
    }
  });
  