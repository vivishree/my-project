document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Here, you can perform AJAX requests to a backend server for authentication
    // For the sake of simplicity, let's assume the username is "user" and password is "pass"
    if (username === "vishwatha" && password === "1234567890") {
        alert("Login successful!");
        
            window.open("designing.html");
      
    } else {
        alert("Invalid credentials. Please try again.");
    }
});