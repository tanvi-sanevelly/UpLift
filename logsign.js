// LOGIN FUNCTIONALITY
document.getElementById("loginBtn").addEventListener("click", function() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
  
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    alert("You have successfully logged in!");
    window.location.href = "home2.html"; // Redirect after login
  });
  
  // SIGN-UP FUNCTIONALITY
  document.getElementById("signupBtn").addEventListener("click", function() {
    const fullName = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const repassword = document.getElementById("signup-repassword").value.trim();
  
    if (fullName === "") {
      alert("Please enter your full name.");
      return;
    }
  
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    if (password !== repassword) {
      alert("Passwords do not match.");
      return;
    }
  
    alert("You have successfully signed up!");
    window.location.href = "home2.html"; // Redirect after signup
  });
  
  // GOOGLE LOGIN (Simulated)
  document.getElementById("googleLoginBtn").addEventListener("click", function() {
    alert("Google login successful! (Simulated)");
    window.location.href = "home2.html"; // Redirect after Google login
  });
